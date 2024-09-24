import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  searchBar: string = "";
  categories!: Set<category>;

  constructor(private http: HttpClient) { }

  getCategory() {
    this.http.get<category>('http://localhost:3000/questions?name='+this.searchBar).subscribe((categories: any) => {
      for(const category of categories){
        this.categories.add(category);
      }
    });    
  }

  resetSearch() {
    this.searchBar = "";
  }

}


export type category = {
  id: number;
  categoryName: string;
}