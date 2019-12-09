import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from '../../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // userUrl: string = 'http://localhost/api/user/';
  userUrl: string = 'http://localhost/cookbook_legyeljo/UNIDEB_2019_1_1_A-Csoda-Csapat/BackEnd/api/user/';

  constructor(private http: HttpClient, private router: Router) { }

  register(user : User) {
    let json = JSON.stringify(user);
    return this.http.post(`${this.userUrl}register.php`, json, {observe: 'response'}).toPromise()
  }

  login(email: string, password: string) {
    let user = new User();
    user.email = email;
    user.password = password;
    let json = JSON.stringify(user);

    return this.http.post(`${this.userUrl}login.php`, json, {observe: 'response'}).toPromise();
  }

  update(user : User) {
    let json = JSON.stringify(user);
    return this.http.post(`${this.userUrl}update.php`, json, {observe: 'response'}).toPromise();
  }

}
