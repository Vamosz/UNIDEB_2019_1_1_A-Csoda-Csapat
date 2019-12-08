import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper: JwtHelperService, private http: HttpClient) { }

  // validateUrl: string = "http://localhost/cookbook/api/user/validate_token.php";
  validateUrl: string = "http://localhost/api/user/validate_token.php";

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    let authenticated;
    if (token != null) {
      const json = JSON.stringify({ jwt: token });

      const response = this.http.post(this.validateUrl, json, { observe: 'response' }).toPromise();
      response.then(response => {
        let data = response.body['data'];
        localStorage.setItem('name', data.name);
        localStorage.setItem('user_id', data.id);
      }).catch(response => {
        localStorage.clear();
        console.log(response);
      });

      authenticated = localStorage.getItem('token') != null;
    } else {
      authenticated = false;
    }

    return authenticated;
  }

}
