import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { category } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent {
  @Input() category!: category;
  playerName = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.playerName = params['playerName'];
    });
  }

  navigateToQuiz() {
    this.router.navigate(['/quiz', this.playerName, this.category.id]);
  }
}
