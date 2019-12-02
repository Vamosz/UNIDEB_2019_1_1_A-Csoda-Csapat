import { ConfigComponent } from './../../config/config.component';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/service/recipeservice/recipe.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title= 'Vámosi Patrik';
 

}
