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
export class HomeComponent{
  title= 'Vámosi Patrik';
  recipes : Recipe[];
  filter;
  

  constructor(private config: ConfigComponent, private recipeService: RecipeService){
    // this.config.getData('http://localhost:8080/users').subscribe(rest => {
    //   this.users = rest;
    //   console.log(this.users.data[0].id)
    // });


  


 






    this.recipes = this.recipeService.getAllRecipes();
  }

  onFilter(event){
    this.filter = event;
    console.log(this.filter);
    
  }

}
