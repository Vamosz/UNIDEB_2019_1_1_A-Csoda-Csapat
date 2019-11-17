import { Component, OnInit } from '@angular/core';
import { RecipeService, Recipe } from 'src/app/service/recipeservice/recipe-service.service';

@Component({
  selector: 'app-recipesmanager',
  templateUrl: './recipesmanager.component.html',
  styleUrls: ['./recipesmanager.component.scss']
})
export class recipesmanagerComponent{
  title="Vámosi Patrik";
  recipes : Recipe[];
  constructor(recipeService : RecipeService) {
    this.recipes = recipeService.getAllRecipes();
  }

}
