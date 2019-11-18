import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/service/recipeservice/recipe-service.service';
import {MatDialog} from '@angular/material/dialog';
import { ReceipeDialogComponent } from './../receipe-dialog/receipe-dialog.component';
@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.scss']
})
export class RecipelistComponent implements OnInit {
  @Input() editable=false;
  @Input() recipes: Recipe[];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }


  openDialog() {
    const dialogRef = this.dialog.open(ReceipeDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
