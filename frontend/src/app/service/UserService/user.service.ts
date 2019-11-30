import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  params;
  constructor(
          private http: HttpClient,
  ){ }

  PostData( user_name, email, password) {
      this.params = "user_name|" + user_name + "|email|" + email + "|password|" + password;
      return this.http.post('http://localhost/Sulis_Cuccok/UNIDEB_2019_1_1_A-Csoda-Csapat/Backend/src/Services/registration.php', this.params).subscribe(value => {
        console.log( value);
      });
  }



}
