import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lsaquiz',
  templateUrl: './lsaquiz.component.html',
  styleUrls: ['./lsaquiz.component.css'],
})
export class LSAQuizComponent implements OnInit {
  selectedQuiz: string;
  constructor() {
    this.selectedQuiz = 'LSA';
  }

  ngOnInit(): void {}
}
