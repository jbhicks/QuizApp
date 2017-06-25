import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'lsaquiz',
  templateUrl: './lsaquiz.component.html',
  styleUrls: ['./lsaquiz.component.css']
})

export class LSAQuizComponent implements OnInit {
  selectedQuiz: string;

  constructor() {}

  ngOnInit(): void {
      this.selectedQuiz = 'LSA';
  }
}
