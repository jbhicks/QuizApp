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
      questions = this.shuffleArray(questions);
      questions = questions.slice(0, this.quizLength);
      questions.forEach(element => {
        console.log(element.id);
      });
    }
    this.questions = questions;
    this.currentIndex = 0;
    this.questionsSize = questions.length;
    this.selectedQuestion = this.questions[this.currentIndex];
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

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }

  done(): void{
    this.progress = 100;
    this.isComplete = true;
  }

  

}
