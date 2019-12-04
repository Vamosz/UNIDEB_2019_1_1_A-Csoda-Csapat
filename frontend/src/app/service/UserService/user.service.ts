import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

import { User } from '../../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl: string = 'http://localhost/cookbook/api/user/';
  
  constructor(private http: HttpClient) { }

  register(user : User) {
    let json = JSON.stringify(user);
    const response = this.http.post(`${this.userUrl}register.php`, json, {observe: 'response'}).toPromise()
    response.then(response => {
      let json = JSON.parse(response.body.toString());
      const jwt = json.jwt;
    }).catch();
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
