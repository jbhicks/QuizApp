import { Component, OnInit, Input, Output } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Question, Option } from '../classes'

@Component({
  selector: 'question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})

export class QuestionDetailComponent {
  @Input() question: Question;

  onSelect(option: Option) {
    option.isSelected = option.isSelected ? false : true;
    this.question.isCorrect = true;
    this.question.options.forEach(element => {
      if (element.isAnswer && !element.isSelected){
        this.question.isCorrect = false;
      } else if (!element.isAnswer && element.isSelected){
        this.question.isCorrect = false;
      }
    });
    console.log(option);
  }
  
}
