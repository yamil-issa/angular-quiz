import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { QuizComponent } from "./quiz/quiz.component";
import { ResultComponent } from "./quiz/result/result.component";

const routes: Routes = [
  {
    path: '',
    component : HomeComponent
  },
  {
    path: 'quiz/:playerName',
    component : QuizComponent
  },
  {
    path: 'result',
    component : ResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
