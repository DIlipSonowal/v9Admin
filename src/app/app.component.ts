import { Component, OnInit, NgZone, AfterViewInit } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'dashboard';
  polygonSeries;
  constructor(private zone: NgZone) { }
  ngAfterViewInit(){
  }
  }
