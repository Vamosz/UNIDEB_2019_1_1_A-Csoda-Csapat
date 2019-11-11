import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  public getData(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  public postData(data,url:string): Observable<any> {
    return this.http.post<any>(url, data);
  }


}
