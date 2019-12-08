import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {
  @Output() filter = new EventEmitter();
  panelOpenState: boolean = false;
  
  constructor( private snackBar:MatSnackBar) {
  }

  ngOnInit() {
  }

  search(){
    this.snackBar.open("Jelenleg a kereső nem működik.","OK", { duration: 2000 })
  }

  searchedFilter(event: any) {
    this.filter.emit(event.toElement.innerText);
  }
}
