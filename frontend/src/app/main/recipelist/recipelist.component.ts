import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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
  @Input() recipes: Recipe[];
  @Input() editable: boolean;
  @Output() editableTo:  boolean;
  @Output() emitter: EventEmitter<boolean> = new EventEmitter();

  constructor(public dialog: MatDialog, private recipeService: RecipeService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.fetchRecipes();
    this.editableTo = this.editable;
    // console.log(this.editableTo); true
  }

  fetchRecipes(event?) {
    this.emitter.emit(true);
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
    this.dialog.open(RecipeDialogCreateComponent, { width: '90%' }).afterClosed()
    .subscribe(res => {
       this.fetchRecipes();
       this.snackBar.open(res, "OK", { duration: 20000 });
     });
  }

  deleteRecipe(id: number) {
    this.recipeService.deleteRecipe(id)
      .then(response => {
        let message = response.body['message'];
        this.snackBar.open(message, "OK", { duration: 2000 });
      }).catch(response => {
        let message = response.error.message;
        this.snackBar.open(message, "OK", { duration: 2000 });
      });

    this.fetchRecipes();
  }

}
