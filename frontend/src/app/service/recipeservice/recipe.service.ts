import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

import { Recipe } from '../../model/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipesUrl: string = 'http://localhost/cookbook/api/recipe/';

  constructor(private http: HttpClient) { }

  getAllRecipes() {
    return this.http.get<Recipe[]>(`${this.recipesUrl}read_all.php`, {observe: 'response'}).toPromise();
  }

  getRecipe(id: number) : Observable<any> {
    return this.http.get(`${this.recipesUrl}read_one.php?id=${id}`);
  }
  
  createRecipe(recipe: Recipe) {
    let recipe_json = JSON.stringify(recipe);
    let json = JSON.parse(recipe_json);
    json.author_id = json.author.id;
    delete json.author;
    json = JSON.stringify(json);

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
    let response;
    this.http.post(`${this.recipesUrl}update.php`, json, {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain'
      }),
      observe: 'response'
    }).subscribe(response => response = response);
    
    return response;
  }
}
