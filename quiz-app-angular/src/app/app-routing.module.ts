import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LSAQuizComponent } from './lsaquiz/lsaquiz.component';
import { CSAQuizComponent } from './csaquiz/csaquiz.component';
import { CSSAQuizComponent } from './cssaquiz/cssaquiz.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/CSAQuiz',
    pathMatch: 'full',
  },
  {
    path: 'LSAQuiz',
    component: LSAQuizComponent,
  },
  {
    path: 'CSSAQuiz',
    component: CSSAQuizComponent,
  },
  {
    path: 'CSAQuiz',
    component: CSAQuizComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
