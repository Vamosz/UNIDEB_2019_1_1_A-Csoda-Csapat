import { Component, OnInit, Input, Output } from '@angular/core';
import { Recipe } from 'src/app/model/Recipe';
import { MatDialog, MatSnackBar } from '@angular/material';
import { RecipeDialogComponent } from '../recipe-dialog/recipe-dialog.component';
import { RecipeService } from 'src/app/service/recipeservice/recipe.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Output() onChange = new EventEmitter<boolean>();
  @Input() recipe: Recipe;
  @Input() editable: boolean;

  constructor(public dialog: MatDialog, private recipeService: RecipeService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  viewRecipe() {
    this.dialog.open(RecipeDialogComponent, { maxHeight: '90vh', data: this.recipe });
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.recipe.id)
      .then(response => {
        let message = response.body.message;
        this.snackBar.open(message, "OK", { duration: 2000 });
        this.onChange.emit(true);
      }).catch(response => {
        let message = response.error.message;
        this.snackBar.open(message, "OK", { duration: 2000 });
      });
  }


}
