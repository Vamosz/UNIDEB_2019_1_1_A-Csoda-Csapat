import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

import { Recipe } from '../../model/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  // recipesUrl: string = 'http://localhost/cookbook/api/recipe/';
  recipesUrl: string = 'http://localhost/cookbook/BackEnd/api/recipe/';
 // recipesUrl: string = 'http://localhost/api/recipe/';

  constructor(private http: HttpClient) { }

  getAllRecipes() {
    return this.http.get<Recipe[]>(`${this.recipesUrl}read_all.php`, {observe: 'response'}).toPromise();
  }

  getAllRecipesForAuthor() {
    let id = localStorage.getItem('user_id');
    return this.http.get<Recipe[]>(`${this.recipesUrl}read_all_user.php?user_id=${id}`, {observe: 'response'}).toPromise();
  }

  getRecipe(id: number) : Observable<any> {
    return this.http.get(`${this.recipesUrl}read_one.php?id=${id}`);
  }

  createRecipe(recipe: Recipe) {
    let json = JSON.stringify(recipe);

    return this.http.post(`${this.recipesUrl}create.php`, json, {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain'
      }),
      observe: 'response'
    }).toPromise();
  }

  deleteRecipe(id: number) {
    let json = `{ "id": ${id} }`;

    return this.http.post(`${this.recipesUrl}delete.php`, json, {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain'
      }),
      observe: 'response'
    }).toPromise();
  }

  updateRecipe(recipe: Recipe) {
    let json = JSON.stringify(recipe);
    let response: any;
    this.http.post(`${this.recipesUrl}update.php`, json, {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain'
      }),
      observe: 'response'
    }).subscribe(response => response = response);

    return response;
  }
}
