import { RecipeService, Recipe } from 'src/app/service/recipeservice/recipe-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-recipesmanager',
  templateUrl: './recipesmanager.component.html',
  styleUrls: ['./recipesmanager.component.scss']
})
export class recipesmanagerComponent implements OnInit {
  title="Vámosi Patrik";
  recipes : Recipe[];
  constructor(private recipeService : RecipeService) {
  }

  ngOnInit() {
    this.recipeService.getAllRecipes().subscribe(recipes => this.recipes = recipes);
  }
}
