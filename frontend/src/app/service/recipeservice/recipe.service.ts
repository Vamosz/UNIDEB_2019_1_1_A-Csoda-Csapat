import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http'
import { Observable } from 'rxjs';

import { Recipe } from '../../model/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipesUrl: string = 'http://localhost/cookbook/api/recipe/';

  constructor(private http: HttpClient) { }

  getAllRecipes() : Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.recipesUrl}read_all.php`);
  }

  getRecipe(id: number) : Observable<any> {
    return this.http.get(`${this.recipesUrl}read_one.php?id=${id}`);
  }
  
  createRecipe(recipe: Recipe) {
    let json = JSON.stringify(recipe);
    console.log(json);
    let response;
    this.http.post(`${this.recipesUrl}create.php`, json, {observe: 'response'}).subscribe(resp => response = resp);
    
    return response;
  }

  deleteRecipe(id: number) {
    let json = `{ "id": ${id} }`;
    let response;
    this.http.post(`${this.recipesUrl}delete.php`, json, {observe: 'response'}).subscribe(resp => response = resp);

    return response;
  }

  updateRecipe(recipe: Recipe) {
    let json = JSON.stringify(recipe);
    let response;
    this.http.post(`${this.recipesUrl}update.php`, json, {observe: 'response'}).subscribe(resp => response = resp);
    
    return response;
  }
}
