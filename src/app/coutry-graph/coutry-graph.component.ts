import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-coutry-graph',
  templateUrl: './coutry-graph.component.html',
  styleUrls: ['./coutry-graph.component.scss']
})
export class CoutryGraphComponent implements OnInit {

    @Input() countryData;

    ngOnInit() {

    }

}
