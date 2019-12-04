import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  title: string;
  constructor() { }

  ngOnInit() {
  }

  logout()  {
    localStorage.clear();
  }

}
