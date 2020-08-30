import { Injectable, OnInit } from '@angular/core';
import {HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/Operators';
let endpoint = "http://localhost:8000";

@Injectable({
  providedIn: 'root'
})
export class HomeService implements OnInit{
  // token = "";
  // httpOptions;
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

   howitworks(data) {
    const token = JSON.parse(localStorage.getItem('currentUser')).jwt;
    const httpOptions = {
        headers: new HttpHeaders({
            'Authorization': `Bearer ${token}`,
        }),
    };
     return this.http.post(`${endpoint}/home/how_itworks`, data, httpOptions)
     .pipe(map(res=>{
       return res;
     })); 
   }

   feedBack(data) {
    const token = JSON.parse(localStorage.getItem('currentUser')).jwt;
    const httpOptions = {
        headers: new HttpHeaders({
            'Authorization': `Bearer ${token}`,
        }),
    };
      return this.http.post(`${endpoint}/feedback`, data, httpOptions)
      .pipe(map( res => {
        return res;
      }));
   }

   teamsPhoto(data) {
      const token = JSON.parse(localStorage.getItem('currentUser')).jwt;
      const httpOptions = {
          headers: new HttpHeaders({
              'Authorization': `Bearer ${token}`,
          }),
      };
      return this.http.post(`${endpoint}/teams_photo`, data, httpOptions)
      .pipe(map( res => {
        return res;
      }));
   }

   aboutVimmigration(data) {
    const token = JSON.parse(localStorage.getItem('currentUser')).jwt;
    const httpOptions = {
        headers: new HttpHeaders({
            'Authorization': `Bearer ${token}`,
        }),
    };
    return this.http.post(`${endpoint}/aboutV9immigration`, data, httpOptions)
    .pipe(map( res => {
      return res;
    }));
   }

   aboutMission(data) {
    const token = JSON.parse(localStorage.getItem('currentUser')).jwt;
    const httpOptions = {
        headers: new HttpHeaders({
            'Authorization': `Bearer ${token}`,
        }),
    };
    return this.http.post(`${endpoint}/about_mission`, data, httpOptions)
    .pipe(map( res => {
      return res;
    }));
   }

   ourVission(data) {
    const token = JSON.parse(localStorage.getItem('currentUser')).jwt;
    const httpOptions = {
        headers: new HttpHeaders({
            'Authorization': `Bearer ${token}`,
        }),
    };
    return this.http.post(`${endpoint}/our_vission`, data, httpOptions)
    .pipe(map( res => {
      return res;
    }));
   }

   ourValues(data) {
     console.log(data);
    const token = JSON.parse(localStorage.getItem('currentUser')).jwt;
    const httpOptions = {
        headers: new HttpHeaders({
            'Authorization': `Bearer ${token}`,
        }),
    };
    return this.http.post(`${endpoint}/home/our_values`, data, httpOptions)
    .pipe(map( res => {
      return res;
    }));
   }

}
