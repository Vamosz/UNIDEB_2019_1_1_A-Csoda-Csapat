import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from 'src/app/service/recipeservice/recipe.service';
import { MatDialog } from '@angular/material/dialog';

import { Recipe } from '../../model/Recipe';
import { RecipeDialogCreateComponent } from '../recipe-dialog-create/recipe-dialog-create.component';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.scss']
})
export class RecipelistComponent implements OnInit {
  @Input() editable = false;
  recipes: Recipe[];
  err: boolean;
  msg: string;

  constructor(public dialog: MatDialog, private recipeService: RecipeService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.fetchRecipes();
  }

  fetchRecipes(event?) {
    this.recipeService.getAllRecipes().then(
      response => {
        this.recipes = response.body
      }).catch(
        response => {
          this.recipes = [];
          this.err = true;
          this.msg = response.error.message;
        });
  }

  viewRecipe(id: number) {
    let recipe: Recipe;

    for (let rec of this.recipes) {
      if (rec.id === id) {
        recipe = rec;
      }
    }
  }

  createRecipe() {
    let result;
    this.dialog.open(RecipeDialogCreateComponent, { width: '90%' }).afterClosed().subscribe(res => { result = res });
    this.fetchRecipes();
    this.snackBar.open(result, "OK", { duration: 20000 });
  }

  deleteRecipe(id: number) {
    this.recipeService.deleteRecipe(id)
      .then(response => {
        let message = response.body.message;
        this.snackBar.open(message, "OK", { duration: 2000 });
      }).catch(response => {
        let message = response.error.message;
        this.snackBar.open(message, "OK", { duration: 2000 });
      });

    this.fetchRecipes();
  }

}
