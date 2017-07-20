import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() onAnswered = new EventEmitter<boolean>();

  onSelect(option: Option) {
    let numSelected = 0;
    let numAnswers = 0;
    option.isSelected = !option.isSelected;
    console.log(option);
    this.question.options.forEach(option => {
      if(option.isSelected) numSelected++;
      if(option.isAnswer) numAnswers++;
    });
    if (numAnswers === numSelected) {
      console.log(`Selected: ${numSelected}\nAnswers: ${numAnswers}`);
      this.onAnswered.emit(true);
    }
    
  }
  
}
