import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns = ['select', 'position', 'name', 'weight', 'symbol', 'author', 'duedate'];
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
  weight: number;
  symbol: string;
  author: string;
  duedate: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',author: 'shekar', duedate:'12-12-2020'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', author: 'shekar', duedate:'12-12-2020'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', author: 'shekar', duedate:'12-12-2020'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', author: 'shekar', duedate:'12-12-2020'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', author: 'shekar', duedate:'12-12-2020'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', author: 'shekar', duedate:'12-12-2020'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', author: 'shekar', duedate:'12-12-2020'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', author: 'shekar', duedate:'12-12-2020'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', author: 'shekar', duedate:'12-12-2020'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', author: 'shekar', duedate:'12-12-2020'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na', author: 'shekar', duedate:'12-12-2020'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg', author: 'shekar', duedate:'12-12-2020'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al', author: 'shekar', duedate:'12-12-2020'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', author: 'shekar', duedate:'12-12-2020'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P', author: 'shekar', duedate:'12-12-2020'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S', author: 'shekar', duedate:'12-12-2020'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl', author: 'shekar', duedate:'12-12-2020'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar', author: 'shekar', duedate:'12-12-2020'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K', author: 'shekar', duedate:'12-12-2020'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca', author: 'shekar', duedate:'12-12-2020'},
];

