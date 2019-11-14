import { ConfigComponent } from './../../config/config.component';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  title= 'Vámosi Patrik';
  filter = " 5";
users;
constructor(private config: ConfigComponent){
  // this.config.getData('http://localhost:8080/users').subscribe(rest => {
  //   this.users = rest;
  //   console.log(this.users.data[0].id)
  // });
}

  recipes = [
    "Sir Patrick Stewart's mole enchiladas",
    "Tom Walker's chicken & hot sauce gravy",
    "Grilled chicken with charred pineapple salad",
    "Crispy & sticky chicken thighs with squashed new potatoes & tomatoes",
    "Craig David's Grenadian baked chicken",
    "Greg Davies' Thai green chicken curry",
    "Roast leg of lamb with pancetta, sage & rosemary",
    "Orlando Bloom's lamb shank tagine",
    "Basic recipe for fresh egg pasta dough",
    "Spaghetti with anchovies, dried chilli & pangrattato",
    "Romesh Ranganathan's epic veg lasagne"
  ];


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.recipes, event.previousIndex, event.currentIndex);
  }

onFilter(event){
  this.filter = event;
  console.log(this.filter);
  
}

}