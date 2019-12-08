import { UserService } from './../../service/UserService/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/authservice/auth.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  user: User;

  constructor(private userService: UserService, private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {
    if (authService.isAuthenticated()) {
      router.navigate(['home']);
    }
  }

  ngOnInit() {
    this.user = new User();
  }

  register() {
    this.userService.register(this.user)
      .then(response => {
        let jwt = response.body['jwt'];
        localStorage.setItem('token', jwt);
        this.router.navigate(['login']);
      }).catch(response => {
        console.log(response.error);
        this.snackBar.open(response.error.message, "Dismiss", { duration: 20000 });
      });
  }

}
