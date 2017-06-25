import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Question, Option, Quiz } from '../classes';
import { QuestionService } from '../question-service.service'

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-question-search',
  templateUrl: './question-search.component.html',
  styleUrls: ['./question-search.component.css']
})
export class QuestionSearchComponent implements OnInit {
  questions: Observable<Question[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private questionService: QuestionService,
    private router: Router) { }
    
    // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    // this.questions = this.searchTerms
    //                      .debounceTime(300)
    //                      .distinctUntilChanged()
  }

}
