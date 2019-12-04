import { UserService } from './../../service/UserService/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide=true;
  user : User;

  constructor(private userService: UserService, private router : Router){}

  ngOnInit() {
    this.user = new User();
  }

  register() {
    this.userService.register(this.user).then(() => {this.router.navigate(["/login"])}).catch();
  }

}
