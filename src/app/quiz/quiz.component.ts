import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../shared/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  isQuizFinished = this.quizService.isQuizFinished;
  playerName = '';
  categoryId = '';

  constructor(
    private quizService: QuizService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.quizService.playerName = params['playerName'];
      this.playerName = params['playerName'];
      this.categoryId = params['categoryId'];

      this.quizService.setCategoryId(this.categoryId);
    });
  }

  goToResultPage() {
    this.router.navigate(['/result']);
  }
}
