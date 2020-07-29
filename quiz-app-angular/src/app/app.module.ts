import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuizMainComponent } from './quiz-main/quiz-main.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LSAQuizComponent } from './lsaquiz/lsaquiz.component';
import { CSAQuizComponent } from './csaquiz/csaquiz.component';
import { CSSAQuizComponent } from './cssaquiz/cssaquiz.component';
import { HttpClientModule } from '@angular/common/http';
import 'hammerjs';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { ViewResultsComponent } from './view-results/view-results.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizMainComponent,
    LSAQuizComponent,
    CSAQuizComponent,
    CSSAQuizComponent,
    QuestionDetailComponent,
    ViewResultsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatProgressBarModule,
    MatGridListModule,
    MatListModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatChipsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
