import { Component } from '@angular/core';
import { category, CategoryService } from '../shared/services/category.service';
import { QuizService } from '../shared/services/quiz.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  categoriesList: category[] = [];
  searchBar: string = '';

  constructor(
    private categoryService: CategoryService,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.quizService.resetQuiz();
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

  resetForm() {
    this.categoryService.resetSearch();
    this.searchBar = this.categoryService.searchBar;
    this.getCategories();
  }
}
