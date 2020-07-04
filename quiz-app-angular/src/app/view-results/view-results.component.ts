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
  grade: number = 0;
  numCorrect: number = 0;
  numQuestions: number = 0;

  constructor() { }

  ngOnInit() {
    this.gradeQuiz(this.questions);
  }

  gradeQuiz(questions: Question[]){
    
    questions.forEach(question => {
      console.log(`Grading question: \n${JSON.stringify(question)}`);
      let isCorrect = true;
      question.options.forEach(option => {
        if (option.isSelected && !option.isAnswer) isCorrect = false;
      });
      if (isCorrect) this.numCorrect++;
    });
    
    this.numQuestions = questions.length;
    this.grade = (this.numCorrect / this.numQuestions) * 100;
  }

  
}
