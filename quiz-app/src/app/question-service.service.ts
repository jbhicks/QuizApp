import { Injectable, OnInit } from '@angular/core';
import { Question, Option, Quiz } from './classes'
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class QuestionService implements OnInit {

  constructor(private http: Http){  }
  
  ngOnInit(): void {
      console.log("Questions service online");
    }

  getQuestions(type: string): Observable<Question[]>{
    return this.http.get(`/api/${type}Questions`).map(this.extractData);
  }


  extractData(res : Response) {
    //console.log(res.json().questions)
    return res.json().questions;
  } 




}
