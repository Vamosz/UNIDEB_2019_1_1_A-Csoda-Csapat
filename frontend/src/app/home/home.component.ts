import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
title= 'Vámosi Patrik';
urlOfPic ="";

receipts = [
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
  moveItemInArray(this.receipts, event.previousIndex, event.currentIndex);
}


}
