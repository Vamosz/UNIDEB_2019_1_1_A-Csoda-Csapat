import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tagfilter',
  templateUrl: './tagfilter.component.html',
  styleUrls: ['./tagfilter.component.scss']
})
export class TagfilterComponent implements OnInit {
  panelOpenState: boolean = false; 
  activeTags = [];
  tags = ['Appetizer', 'Soup', 'Dessert', 'Chicken',
          'Duck', 'Beef', 'Goose', 'Sweet',
          'Cookie', 'Chinese', 'Japanese', 'Fish' ]
  constructor() { }

  ngOnInit() {
    
  }

  filter(tag : string) {
    var element = document.getElementById(tag) as HTMLElement;
    if (this.activeTags.some(activeTag => activeTag == tag)) {
      console.log('Removing ' + tag + ' from activeTags');
      var index : number = this.activeTags.indexOf(tag);
      this.activeTags.splice(index, 1);
    } else {
      console.log('Adding ' + tag + ' to activeTags');
      this.activeTags.push(tag);
      console.log(element.className);
    }
    element.classList.toggle('selected');
  }

}
