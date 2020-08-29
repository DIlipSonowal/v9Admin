import { Injectable, OnInit } from '@angular/core';
import {HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/Operators';
let endpoint = "http://localhost:8000";

@Injectable({
  providedIn: 'root'
})
export class HomeService implements OnInit{
  constructor(private http: HttpClient) { }
  ngOnInit(){

  }
  
  topSlider(data){
    const token = JSON.parse(localStorage.getItem('currentUser')).jwt;
    const httpOptions = {
        headers: new HttpHeaders({
            'Authorization': `Bearer ${token}`,
        }),
    };
      return this.http.post(`${endpoint}/top_slider`, data, httpOptions)
      .pipe(map(res=>{
        return res;
      }));
  }

  goalSlider(data){
    const token = JSON.parse(localStorage.getItem('currentUser')).jwt;
    const httpOptions = {
        headers: new HttpHeaders({
            'Authorization': `Bearer ${token}`,
        }),
    };
      return this.http.post(`${endpoint}/our_goals`, data, httpOptions)
      .pipe(map(res=>{
        return res;
      }));
  }

  aboutSection(data) {
    const token = JSON.parse(localStorage.getItem('currentUser')).jwt;
    const httpOptions = {
        headers: new HttpHeaders({
            'Authorization': `Bearer ${token}`,
        }),
    };
      return this.http.post(`${endpoint}/home/about`, data, httpOptions)
      .pipe(map(res=>{
        return res;
      }));
  }

   whychooseus(data){
    const token = JSON.parse(localStorage.getItem('currentUser')).jwt;
    const httpOptions = {
        headers: new HttpHeaders({
            'Authorization': `Bearer ${token}`,
        }),
    };
      return this.http.post(`${endpoint}/whychooseus`, data, httpOptions)
      .pipe(map(res=>{
        return res;
      }));
   }

   immigrationService(data) {
      const token = JSON.parse(localStorage.getItem('currentUser')).jwt;
      const httpOptions = {
          headers: new HttpHeaders({
              'Authorization': `Bearer ${token}`,
          }),
      };
      return this.http.post(`${endpoint}/immigration_service`, data, httpOptions)
      .pipe(map(res=>{
        return res;
      }));
   }

}
