import { Injectable, OnInit } from '@angular/core';
import { Question, Option, Quiz } from './classes';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionService implements OnInit {
  private shouldShuffle: boolean;
  private numQuestions: number;
  constructor(private http: Http) {}

  ngOnInit(): void {
    console.log('Questions service online');
  }

  getQuestions(type: string): Observable<any> {
    console.log(`retrieving ${type} quiz`);
    return this.http.get(`./assets/data/${type}.json`);
  }

  setNumQuestions(num: number) {
    this.numQuestions = num;
  }

  getNumQuestions(): number {
    return this.numQuestions;
  }

  getShouldShuffle(): boolean {
    return this.shouldShuffle;
  }

  setShouldShuffle(shouldShuffle: boolean): void {
    this.shouldShuffle = shouldShuffle;
    console.log(`Shuffling status: ${this.shouldShuffle}`);
  }

  extractData(res: Response) {
    console.log(res);
    return res.json();
  }
}
