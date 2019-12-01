import { ReceipeDialogComponent } from './../receipe-dialog/receipe-dialog.component';
import { ConfigComponent } from './../../config/config.component';
import { Component, OnInit } from '@angular/core';
import { Recipe, RecipeService } from 'src/app/service/recipeservice/recipe-service.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [{
    provide: RecipeService, useClass: RecipeService
  }]
})
export class HomeComponent implements OnInit {
  title= 'Vámosi Patrik';
  recipes : Recipe[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.getAllRecipes().subscribe(recipes => this.recipes = recipes);
  }

}
