import { Component, Input } from '@angular/core';
import { category } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent {
  @Input() category!: category;

  constructor() {
    console.log(this.category);
  }
}
