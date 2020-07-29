import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cssaquiz',
  templateUrl: './cssaquiz.component.html',
  styleUrls: ['./cssaquiz.component.css'],
})
export class CSSAQuizComponent implements OnInit {
  selectedQuiz: string;
  constructor() {
    this.selectedQuiz = 'CSSA';
  }

  ngOnInit(): void {}
}
