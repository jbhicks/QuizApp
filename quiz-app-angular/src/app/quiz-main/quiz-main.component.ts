import { Component, OnInit, Input, Output } from '@angular/core';
import { QuestionService } from '../question-service.service';
import { Question, Option, Quiz } from '../classes';
import { QuestionDetailComponent } from '../question-detail/question-detail.component';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'quiz-main',
  templateUrl: './quiz-main.component.html',
  styleUrls: ['./quiz-main.component.css']
})
export class QuizMainComponent implements OnInit {
  
  @Input() selectedQuiz: string;
  selectedQuestion: Question;
  quiz: Quiz;
  questions: Question[];
  questionsSize: number;
  currentIndex: number;
  answeredQuestions: number;
  progress: number = 0;
  quizLength: number = 0;
  shouldShuffle: boolean = true;
  isComplete: boolean;
  
  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    this.isComplete = false;
    this.answeredQuestions = 0;
    this.quizLength = 99;
    this.questionService.getQuestions(this.selectedQuiz).subscribe(questions => this.setQuestions(questions));
  }

  setQuestions(questions: Question[]) {
    if (this.shouldShuffle) {
      questions = this.shuffle(questions);
      questions = questions.slice(0, this.quizLength);
      this.ensureUniqueness(questions);
    }
    this.questions = questions;
    this.currentIndex = 0;
    this.questionsSize = questions.length;
    this.selectedQuestion = this.questions[this.currentIndex];
    this.ensureUniqueness(questions);
    
  }

  ensureUniqueness(questions: Question[]) {
    console.log(questions);
    for(let i = 0; i < questions.length; i++){
      let id = questions[i].id;
      let count = 0;
      for(let j = 0; j < questions.length; j++){
        if(questions[j].id == id) count++;
      }
      if (count > 1) console.log(`found ${id} ${count} times`);
    }
  }

  submit(question: Question): void {
    this.currentIndex++;
    this.progress = (this.currentIndex / this.questionsSize)*100;
    if (this.currentIndex < this.questions.length) {
      this.selectedQuestion = this.questions[this.currentIndex];
      this.answeredQuestions++;
    } else {
      this.isComplete = true;
    }
  }

  shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
  }

  done(): void{
    this.progress = 100;
    this.isComplete = true;
  }

  

}
