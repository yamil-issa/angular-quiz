import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../shared/services/quiz.service';
import { CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  isQuizFinished = this.quizService.isQuizFinished;
  playerName = '';
  categoryId: string = '';
  categoryName: string = '';

  constructor(
    private quizService: QuizService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.quizService.playerName = params['playerName'];
      this.playerName = params['playerName'];
      this.categoryId = params['categoryId'];

      this.quizService.setCategoryId(this.categoryId);

      this.categoryId &&
        this.categoryService
          .getCategoryById(parseInt(this.categoryId))
          .subscribe((result: any) => {
            this.categoryName = result.categoryName;
          });
    });
  }

  goToResultPage() {
    this.router.navigate(['/result']);
  }
}
