import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Question, Option, Quiz } from '../classes';
import { QuestionService } from '../question-service.service'
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { QuestionSearchService } from "app/question-search.service";

@Component({
  selector: 'app-question-search',
  templateUrl: './question-search.component.html',
  styleUrls: ['./question-search.component.css']
})

export class QuestionSearchComponent implements OnInit {
questions: Question[] = new Array<Question>();
questionsSize: number;
searchInput: FormControl = new FormControl('');
private searchTerms = new Subject<string>();
obsQuestions: Observable<Question[]>;

constructor(private questionService: QuestionService, private router: Router, private questionSearchService: QuestionSearchService) { }
    
ngOnInit() {
  this.questionService.getQuestions(`LSA`).subscribe(questions => this.setQuestions(questions));
  this.questionService.getQuestions(`CSSA`).subscribe(questions => this.setQuestions(questions));
  
}

setQuestions(questions: Question[]) {
  this.questions.concat(questions);
  this.questionsSize = this.questions.length;
  console.log(`Added ${questions.length} questions`);
}

searchQuestions(term: string): Question[] {
  return this.questions;
}

search(term: string): void {
    this.searchTerms.next(term);
    console.log(term);
}
 
}
