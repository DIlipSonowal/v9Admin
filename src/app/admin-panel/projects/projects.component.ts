import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns = ['select',  'name', 'indicator'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  selection = new SelectionModel<Element>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
}

export interface Element {
  name: string;
  position: number;
  indicator: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Ericsson bot', indicator: 'shekar'},
  {position: 1, name: 'Ericsson bot', indicator: 'shekar'},
  {position: 1, name: 'Ericsson bot', indicator: 'shekar'},
  {position: 1, name: 'Ericsson bot', indicator: 'shekar'},
  {position: 1, name: 'Ericsson bot', indicator: 'shekar'},
  {position: 1, name: 'Ericsson bot', indicator: 'shekar'},
  {position: 1, name: 'Ericsson bot', indicator: 'shekar'},
  {position: 1, name: 'Ericsson bot', indicator: 'shekar'},
  {position: 1, name: 'Ericsson bot', indicator: 'shekar'},
  {position: 1, name: 'Ericsson bot', indicator: 'shekar'},
  {position: 1, name: 'Ericsson bot', indicator: 'shekar'},
  {position: 1, name: 'Ericsson bot', indicator: 'shekar'},
];


