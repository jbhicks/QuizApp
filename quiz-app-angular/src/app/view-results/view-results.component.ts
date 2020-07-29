import { Component, OnInit, Input } from '@angular/core';
import { Question, Option, Quiz } from '../classes';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-view-results',
  templateUrl: './view-results.component.html',
  styleUrls: ['./view-results.component.css'],
})
export class ViewResultsComponent implements OnInit {
  @Input() questions: Question[];
  grade = 0;
  numCorrect = 0;
  numQuestions = 0;

  constructor() {}

  ngOnInit() {
    this.gradeQuiz(this.questions);
  }

  gradeQuiz(questions: Question[]) {
    questions.forEach((question) => {
      // console.log(`Grading question: \n${JSON.stringify(question)}`);
      let isCorrect = false;
      question.options.forEach((option) => {
        if (option.isSelected && option.isAnswer) {
          isCorrect = true;
        }
      });
      if (isCorrect) {
        this.numCorrect++;
      }
    });

    this.numQuestions = questions.length;
    this.grade = (this.numCorrect / this.numQuestions) * 100;
  }
}
