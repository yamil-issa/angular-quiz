import { Component } from '@angular/core';
import { category, CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  categoriesList: category[] = [];
  searchBar: string = '';

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe((result: any) => {
      this.categoriesList = result;
      console.log(this.categoriesList);
    });
  }

  getCategories() {
    this.categoryService.searchBar = this.searchBar;
    this.categoryService.getCategory().subscribe((result: any) => {
      this.categoriesList = result;
    });
  }
}

