import { Component, Output } from '@angular/core';
import { Recipe } from 'src/app/model/Recipe';
import { RecipeService } from 'src/app/service/recipeservice/recipe.service';

@Component({
  selector: 'app-recipesmanager',
  templateUrl: './recipesmanager.component.html',
  styleUrls: ['./recipesmanager.component.scss']
})
export class recipesmanagerComponent {
  recipes: Recipe[];
  err: boolean;
  msg: string;
  @Output() editable ;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(){
    this.editable = true;
  }
  
  fetchRecipes(event?) {
    this.recipeService.getAllRecipesForAuthor().then(
      response => {
        this.recipes = response.body
        this.err = false;
      }).catch(
        response => {
          this.recipes = [];
          this.err = true;
          this.msg = response.error.message;
        });
  }

}
