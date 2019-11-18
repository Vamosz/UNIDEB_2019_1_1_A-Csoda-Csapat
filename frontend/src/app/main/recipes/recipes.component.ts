import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { ReceipeDialogComponent } from './../receipe-dialog/receipe-dialog.component';

export interface PeriodicElement {
  name: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: "Sir Patrick Stewart's mole enchiladas" },
  {position: 2, name: "Grilled chicken with charred pineapple salad"},
  {position: 3, name: "Crispy & sticky chicken thighs with squashed new potatoes & tomatoes" },
  {position: 4, name: "Craig David's Grenadian baked chicken" },
  {position: 5, name: "Greg Davies' Thai green chicken curry" },
  {position: 6, name:  "Roast leg of lamb with pancetta, sage & rosemary"},
  {position: 7, name:  "Orlando Bloom's lamb shank tagine"},
  {position: 8, name: "Basic recipe for fresh egg pasta dough"},
  {position: 9, name: "Spaghetti with anchovies, dried chilli & pangrattato" },
];


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class recipesComponent implements OnInit  {
  title="Vámosi Patrik";
  filter;
  displayedColumns: string[] = ['position', 'name'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(public dialog: MatDialog){}
  
  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
  openDialog() {
    const dialogRef = this.dialog.open(ReceipeDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onFilter(event){
    this.filter = event;
    console.log(this.filter);
    
  }
}
