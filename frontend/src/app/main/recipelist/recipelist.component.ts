import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from 'src/app/service/recipeservice/recipe.service';
import { MatDialog } from '@angular/material/dialog';
import { RecipeDialogComponent } from '../recipe-dialog/recipe-dialog.component';

import { Recipe } from '../../model/Recipe';
import { RecipeDialogCreateComponent } from '../recipe-dialog-create/recipe-dialog-create.component';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.scss']
})
export class RecipelistComponent implements OnInit {
  @Input() editable=false;
  recipes : Recipe[];

  constructor(public dialog: MatDialog, private recipeService: RecipeService) { }

  ngOnInit() {
    this.fetchRecipes();
  }

  fetchRecipes() {
    this.recipeService.getAllRecipes().subscribe(recipes => this.recipes = recipes)
  }

  viewRecipe(id: number) {
    let recipe : Recipe;

    for(let rec of this.recipes) {
      if (rec.id === id) {
        recipe = rec;
      }
    }
    
    this.dialog.open(RecipeDialogComponent, {maxHeight: '90vh', data : recipe});
  }

  createRecipe() {
    this.dialog.open(RecipeDialogCreateComponent, {width: '90%'});
  }

  deleteRecipe(id: number) {
    this.recipeService.deleteRecipe(id);
    this.fetchRecipes();
  }
}
