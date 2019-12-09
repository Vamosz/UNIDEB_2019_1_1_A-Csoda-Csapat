import { Component, OnInit, Inject } from '@angular/core';
import { Recipe } from 'src/app/model/Recipe';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-recipe-dialog',
  templateUrl: './recipe-dialog.component.html',
  styleUrls: ['./recipe-dialog.component.scss']
})
export class RecipeDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public recipe: Recipe) { }

  ngOnInit() {
  }

}
