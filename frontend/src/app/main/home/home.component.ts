import { ConfigComponent } from './../../config/config.component';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/service/recipeservice/recipe.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Recipe } from 'src/app/model/Recipe';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recipes: Recipe[];
  err: boolean;
  msg: string;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.fetchRecipes();
  }

  fetchRecipes(event?) {
    // this.recipeService.getAllRecipes().then(
    //   response => {
    //     this.recipes = response.body
    //     console.log(response.body);
    //   }).catch(
    //     response => {
    //       this.recipes = [];
    //     });
        this.recipeService.getAllRecipesForAuthor().then(
          response => {
            this.recipes = response.body
            this.err = false;
          }).catch(
            response => {
              this.recipes = [];
              this.err = true;
              this.msg = response.error.message;
            });
  }
}
