import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/authservice/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(authService: AuthService, router: Router) { 
    if (authService.isAuthenticated()) {
      router.navigate(['home']);
    }
  }

  ngOnInit() {
  }

}
