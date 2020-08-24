import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  warn = "red";
  wishlength:number;
  constructor() { }

  ngOnInit(): void {
  }

}
