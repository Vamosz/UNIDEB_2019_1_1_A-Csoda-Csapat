import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/model/Recipe';
import { Ingredient } from 'src/app/model/Ingredient';
import { RecipeService } from 'src/app/service/recipeservice/recipe.service';
import { Author } from 'src/app/model/Author';

@Component({
  selector: 'app-recipe-dialog-create',
  templateUrl: './recipe-dialog-create.component.html',
  styleUrls: ['./recipe-dialog-create.component.scss']
})
export class RecipeDialogCreateComponent implements OnInit {

  recipe: Recipe = new Recipe();
  ingredients: Ingredient[] = [];
  tags : Set<string>= new Set();


  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
  }

  addIngredient() {
    this.ingredients.push(new Ingredient());
  }

  removeIngredient(index: number) {
      this.ingredients.splice(index, 1);   
  }

  addTag(tag: string) {
    this.tags.add(tag);
  }

  removeTag(tag: string) {
    this.tags.delete(tag);
  }

  create() {
    this.recipe.img_src = "null";
    this.recipe.author = new Author;
    this.recipe.author.user_id = 1;
    this.recipe.ingredients = this.ingredients;
    this.recipe.tags = Array.from(this.tags.values());
          
    this.recipeService.createRecipe(this.recipe);
  }

  validIngredients() : boolean {
    for (let ing of this.ingredients) {
      if(ing.amount == null || ing.name == null || ing.unit == null) {
        console.log(ing.name);
        return false;
      }
    }
    return true;
  }

}
