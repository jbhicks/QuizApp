import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { Question, Option } from '../classes';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css'],
})
export class QuestionDetailComponent {
  @Input() question: Question;
  @Output() answered = new EventEmitter<boolean>();

  onSelect(option: Option) {
    let numSelected = 0;
    let numAnswers = 0;
    option.isSelected = !option.isSelected;
    console.log(this.question);
    this.question.options.forEach((o) => {
      if (o.isSelected) {
        numSelected++;
      }
      if (o.isAnswer) {
        numAnswers++;
      }
    });

    if (numAnswers === numSelected && numSelected > 0) {
      this.answered.emit(true);
    }
  }
}
