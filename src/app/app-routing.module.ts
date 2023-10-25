import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { QuizComponent } from './quiz/quiz.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ViewavailablequizComponent } from './viewavailablequiz/viewavailablequiz.component';
import { TaketestComponent } from './taketest/taketest.component';

const routes: Routes = [
  // { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'About', component: AboutComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'addQuestions/:quizID', component: AddquestionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'viewquiz', component: ViewavailablequizComponent },
  { path: 'taketest/:id', component: TaketestComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
