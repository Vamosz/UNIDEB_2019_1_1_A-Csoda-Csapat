import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/service/recipeservice/recipe-service.service';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.scss']
})
export class RecipelistComponent implements OnInit {

  @Input() recipes: Recipe[];

  constructor() { }

  ngOnInit() {
  }

}
