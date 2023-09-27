import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { QuizService } from "../shared/services/quiz.service";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  isQuizFinished = this.quizService.isQuizFinished;
  constructor(private quizService: QuizService, private router: Router) { }

  goToResultPage() {
    this.router.navigate(['/result']);
  }
}
