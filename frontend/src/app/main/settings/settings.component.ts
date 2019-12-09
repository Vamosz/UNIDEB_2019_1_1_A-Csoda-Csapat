import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  name = localStorage.getItem('name');
  email = localStorage.getItem('email');
  constructor() { }

  ngOnInit() {
  }

}
