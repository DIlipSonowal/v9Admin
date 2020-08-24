import { Component, OnInit, NgZone, AfterViewInit } from '@angular/core';
import {
  Router, NavigationStart, NavigationEnd,
  NavigationCancel, NavigationError, Event
} from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'dashboard';
  polygonSeries;
  showLoadingIndicator = true;
  constructor(private _route :Router){

  this._route.events.subscribe((routeEvent:Event)=> {
  if(routeEvent instanceof NavigationStart){
   this.showLoadingIndicator = true;
  }

  if(routeEvent  instanceof NavigationEnd || routeEvent  instanceof NavigationCancel || routeEvent  instanceof NavigationError ){
   this.showLoadingIndicator = false;
  }

  });
  }

  }
