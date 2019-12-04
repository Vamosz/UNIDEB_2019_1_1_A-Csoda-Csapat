import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/UserService/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;
  email = "";
  password = "";

  constructor(private userService: UserService, private router: Router, private snackBar:MatSnackBar) {}

  login() {
    this.userService.login(this.email, this.password)
      .then(response => {
        this.snackBar.open("Login successful.", "Dismiss", { duration: 2000 })
        this.router.navigate(["/home"]);
      }).catch(response => {
        this.snackBar.open(response.error.message, "Dismiss", { duration: 20000 });
      });
  }
}
