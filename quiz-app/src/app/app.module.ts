import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { QuestionService } from './question-service.service';
import { AppComponent } from './app.component';
import { LSAQuizComponent } from './lsaquiz/lsaquiz.component';
import { CSSAQuizComponent } from './cssaquiz/cssaquiz.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import {
        MdButtonModule, 
        MdCheckboxModule, 
        MdCardModule, 
        MdToolbarModule, 
        MdMenuModule, 
        MdProgressBarModule,
        MdListModule, 
        MdGridListModule,
        MdSlideToggleModule,
        MdInputModule,
       } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';
import { QuestionSearchComponent } from './question-search/question-search.component';
import { ViewResultsComponent } from './view-results/view-results.component';
import { QuizMainComponent } from './quiz-main/quiz-main.component';

@NgModule({
  declarations: [
    AppComponent,
    LSAQuizComponent,
    CSSAQuizComponent,
    QuestionDetailComponent,
    QuestionSearchComponent,
    ViewResultsComponent,
    QuizMainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule, 
    MdCheckboxModule, 
    MdCardModule, 
    MdToolbarModule, 
    MdMenuModule, 
    MdProgressBarModule, 
    MdGridListModule,
    MdListModule,
    MdSlideToggleModule,
    MdInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/LSAQuiz',
        pathMatch: 'full'
      },
      {
        path: 'LSAQuiz',
        component: LSAQuizComponent
      },
      {
        path: 'CSSAQuiz',
        component: CSSAQuizComponent
      },
      {
        path: 'Search',
        component: QuestionSearchComponent
      }
    ])
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent],
  exports: [
    MdButtonModule, 
    MdCheckboxModule, 
    MdCardModule, 
    MdToolbarModule, 
    MdMenuModule, 
    MdProgressBarModule, 
    MdGridListModule,
    MdListModule,
    MdSlideToggleModule
  ]
})
export class AppModule { }
