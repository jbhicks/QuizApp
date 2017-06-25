import { Component, OnInit, Input } from '@angular/core';
import { Question, Option, Quiz } from '../classes';
import {MdListModule} from '@angular/material';

@Component({
  selector: 'view-results',
  templateUrl: './view-results.component.html',
  styleUrls: ['./view-results.component.css']
})
export class ViewResultsComponent implements OnInit {
  @Input() questions: Question[];
  grade: number;
  numCorrect: number;
  numQuestions: number;

  constructor() { }

  ngOnInit() {
    this.gradeQuiz(this.questions);
  }

  gradeQuiz(questions: Question[]){
    let count = 0;
    questions.forEach(question => {
      if (question.isCorrect) count++;
    });
    this.numCorrect = count;
    this.numQuestions = questions.length;
    this.grade = (this.numCorrect / this.numQuestions) * 100;
  }

  
}
