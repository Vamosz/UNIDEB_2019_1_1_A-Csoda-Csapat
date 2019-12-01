import { Injectable } from '@angular/core';
import { Time } from '@angular/common';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

export interface Author {
  user_id : number;
  name: string;
  joined_on: Date;
  birth: Date;
}

export interface Recipe {
  title: string;
  author: Author;
  summary: string;
  description: string;
  preparationTime: Time;
  ingredients: string[]
  createdOn: Date;
  tags: string[];
}
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipesUrl = 'http://localhost/cookbook/api/recipe/read_all.php';

  constructor(private http: HttpClient) { }

  getAllRecipes() : Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipesUrl);
  }

}
