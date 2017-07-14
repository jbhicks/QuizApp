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
  shouldShuffle: boolean;
  isComplete: boolean;
  
  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    this.questionService.getQuestions(this.selectedQuiz).subscribe(questions => this.setQuestions(questions));
    this.isComplete = false;
    this.answeredQuestions = 0;
  }

  setQuestions(questions: Question[]) {
    this.questions = questions;
    this.currentIndex = 0;
    this.questionsSize = questions.length;
    this.selectedQuestion = this.questions[this.currentIndex];
    //console.log(JSON.stringify(this.selectedQuestion));
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

  done(): void{
    this.progress = 100;
    this.isComplete = true;
  }

  

}
