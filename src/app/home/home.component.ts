
import { ApiService } from './services/api.service';
import { Observable } from 'rxjs';
import { Component, OnInit, NgZone, AfterViewInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  currentUser: any;
  constructor(private route: Router) {
   // this.auth.currentUser.subscribe(x => this.currentUser = x);
  }
  ngOnInit() { }

  get isAdmin() {
    return
   //  return this.currentUser && this.currentUser.role === Role.Admin;
  }



  logout() {
    // this.auth.logout();
    this.route.navigate(['/login']);
  }
  ngAfterViewInit(){

  }
}
