import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  searchBar: string = '';
  categories!: Set<category>;

  constructor(private http: HttpClient) {}

  getCategory() {
    return this.http.get<category>(
      this.searchBar.length > 0
        ? `http://localhost:3000/categories?categoryName=${this.searchBar}`
        : 'http://localhost:3000/categories'
    );
  }

  getCategoryById(id: number) {
    return this.http.get<category>(`http://localhost:3000/categories/${id}`);
  }

  resetSearch() {
    this.searchBar = '';
  }
}

export type category = {
  id: number;
  categoryName: string;
};
