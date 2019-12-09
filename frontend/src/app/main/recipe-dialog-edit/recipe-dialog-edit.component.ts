import { Component, OnInit, Input, Inject } from '@angular/core';
import { Recipe } from 'src/app/model/Recipe';
import { Ingredient } from 'src/app/model/Ingredient';
import { RecipeService } from 'src/app/service/recipeservice/recipe.service';
import { User } from 'src/app/model/User';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-recipe-dialog-edit',
  templateUrl: './recipe-dialog-edit.component.html',
  styleUrls: ['./recipe-dialog-edit.component.scss']
})
export class RecipeDialogEditComponent implements OnInit {

  ingredients: Ingredient[] = [];
  tags: Set<string> = new Set();


  constructor(@Inject(MAT_DIALOG_DATA) public recipe: Recipe,
              private recipeService: RecipeService,
              private dialogRef: MatDialogRef<RecipeDialogEditComponent>) { }

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

  update() {
    this.recipe.img_src = "null";
    this.recipe.author = new User();
    this.recipe.author.user_id = +localStorage.getItem('user_id');
    this.recipe.ingredients = this.ingredients;
    this.recipe.tags = Array.from(this.tags.values());

    this.recipeService.updateRecipe(this.recipe)
    .then(response => {
      let message = response.body['message'];
      this.dialogRef.close(message);
    }).catch(response => {

    });

  }

  validateIngredients(): boolean {
    for (let ing of this.ingredients) {
      if (ing.amount == null || ing.name == null || ing.unit == null) {
        return false;
      }
    }
    return true;
  }

}
