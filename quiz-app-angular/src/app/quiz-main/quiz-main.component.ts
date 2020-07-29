import { Component, OnInit, Input, Output } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question, Option, Quiz } from '../classes';

@Component({
  selector: 'app-quiz-main',
  templateUrl: './quiz-main.component.html',
  styleUrls: ['./quiz-main.component.css'],
})
export class QuizMainComponent implements OnInit {
  @Input() selectedQuiz: string;
  _tickInterval = 1;
  selectedQuestion: Question;
  quiz: Quiz;
  questions: Question[];
  currentIndex: number;
  answeredQuestions: number;
  numQuestions: number;
  progress = 0;
  autoTicks = false;
  showTicks = false;
  min = 1;
  step = 1;
  isComplete: boolean;
  LSA73Selected: true;
  LSA71Selected: true;

  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    this.isComplete = false;
    this.answeredQuestions = 0;
    this.questionService.setShouldShuffle(true);
    this.questionService
      .getQuestions(this.selectedQuiz)
      .subscribe((questions) => this.setQuestions(questions.json()));
  }

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }

  set tickInterval(v) {
    this._tickInterval = Number(v);
  }

  setQuestions(questions: Question[]) {
    console.log(this.questionService.getShouldShuffle());
    if (this.questionService.getShouldShuffle()) {
      console.log(`shuffling questions`);
      questions = this.shuffle(questions);

      // console.log(questions);
    }
    this.questions = questions;
    this.currentIndex = 0;
    this.questionService.setNumQuestions(this.questions.length);
    this.numQuestions = questions.length;
    this.selectedQuestion = this.questions[this.currentIndex];
    console.log(`loaded ${this.questions.length}`);
  }

  submit(question: Question): void {
    this.currentIndex++;
    this.progress = (this.currentIndex / this.questions.length) * 100;
    if (this.currentIndex < this.questions.length) {
      this.selectedQuestion = this.questions[this.currentIndex];
      this.answeredQuestions++;
    } else {
      this.isComplete = true;
    }
  }

  sliderChanged(eventValue) {
    this.questionService
      .getQuestions(this.selectedQuiz)
      .subscribe((questions) => this.setQuestions(questions));
    this.progress = 0;
    console.log(eventValue);
  }

  shuffle(a) {
    for (let i = a.length; i; i--) {
      const j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
  }

  done(): void {
    this.progress = 100;
    this.isComplete = true;
  }
}
