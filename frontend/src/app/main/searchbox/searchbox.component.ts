import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {
 @Output() filter= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


  searchedFilter($event:any){
    this.filter=$event.toElement.innerText;
  }
}
