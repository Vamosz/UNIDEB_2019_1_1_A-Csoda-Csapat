import { UserService } from './../../service/UserService/user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {
  hide=true;
  birthday;
password;
email;
username;
constructor(private UserService:UserService){}

  send(){
   this.UserService.PostData(this.username, this.email, this.password);
  }

}
