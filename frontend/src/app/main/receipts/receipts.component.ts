import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.scss']
})
export class ReceiptsComponent{
  title="Vámosi Patrik";
  filter;

  onFilter(event){
    this.filter = event;
    console.log(this.filter);
    
  }
}
