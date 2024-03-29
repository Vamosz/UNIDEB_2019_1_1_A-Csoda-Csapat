import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper: JwtHelperService, private http: HttpClient, public router: Router) { }

  // validateUrl: string = "http://localhost/cookbook/api/user/validate_token.php";
  validateUrl: string = "http://localhost/cookbook/BackEnd/api/user/validate_token.php";
  // validateUrl: string = "http://localhost/api/user/validate_token.php";

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    let authenticated;
    if (token != null) {
      const json = JSON.stringify({ jwt: token });

      const response = this.http.post(this.validateUrl, json, { observe: 'response' }).toPromise();
      response.then(response => {
        let data = response.body['data'];;
        localStorage.setItem('name', data.name);
        localStorage.setItem('user_id', data.id);
        localStorage.setItem('email', data.email);
      }).catch(response => {
        localStorage.clear();
        this.router.navigate(['login']);
      });

      authenticated = localStorage.getItem('token') != null;
    } else {
      authenticated = false;
    }

    return authenticated;
  }

}
