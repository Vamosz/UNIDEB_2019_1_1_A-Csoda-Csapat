import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class recipesComponent{
  title="Vámosi Patrik";
  filter;

  onFilter(event){
    this.filter = event;
    console.log(this.filter);
    
  }
}
