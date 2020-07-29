import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csaquiz',
  templateUrl: './csaquiz.component.html',
  styleUrls: ['./csaquiz.component.css'],
})
export class CSAQuizComponent implements OnInit {
  selectedQuiz: string;
  constructor() {
    this.selectedQuiz = 'CSA';
  }

  ngOnInit(): void {}
}
