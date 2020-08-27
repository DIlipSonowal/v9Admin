import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private chart2: am4charts.XYChart;
  constructor(private zone: NgZone) { }

  ngOnInit(): void {
  }
  displayedColumns = ['select', 'position', 'name', 'weight', 'symbol', 'author', 'duedate'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  selection = new SelectionModel<Element>(true, []);

  ngAfterViewInit() {
    //this.createMapData()


    this.zone.runOutsideAngular(() => {
      let chart2 = am4core.create("chartdiv", am4charts.XYChart);
      chart2.paddingRight = 20;
      chart2.data = [{
        "country": "Lithuania",
        "litres": 501.9,
        "units": 250
      }, {
        "country": "Czech Republic",
        "litres": 301.9,
        "units": 222
      }, {
        "country": "Ireland",
        "litres": 201.1,
        "units": 170
      }, {
        "country": "Germany",
        "litres": 165.8,
        "units": 122
      }, {
        "country": "Australia",
        "litres": 139.9,
        "units": 99
      }, {
        "country": "Austria",
        "litres": 128.3,
        "units": 85
      }, {
        "country": "UK",
        "litres": 99,
        "units": 93
      }, {
        "country": "Belgium",
        "litres": 60,
        "units": 50
      }, {
        "country": "The Netherlands",
        "litres": 50,
        "units": 42
      }];

      // Create axes
      var categoryAxis = chart2.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "country";
      categoryAxis.title.text = "Countries";

      var valueAxis = chart2.yAxes.push(new am4charts.ValueAxis());
      valueAxis.title.text = "Litres sold (M)";

      // Create series
      var series = chart2.series.push(new am4charts.ColumnSeries3D());
      series.dataFields.valueY = "litres";
      series.dataFields.categoryX = "country";
      series.name = "Sales";
      series.tooltipText = "{name}: [bold]{valueY}[/]";

      var series2 = chart2.series.push(new am4charts.ColumnSeries3D());
      series2.dataFields.valueY = "units";
      series2.dataFields.categoryX = "country";
      series2.name = "Units";
      series2.tooltipText = "{name}: [bold]{valueY}[/]";

      // Add cursor
      chart2.cursor = new am4charts.XYCursor();
    });
    this.zone.runOutsideAngular(() => {
      am4core.useTheme(am4themes_animated);

      // Create chart instance
      var chart = am4core.create("chartdiv1", am4charts.XYChart);

      // Add data
      chart.data = [{
        "date": new Date(2018, 0, 1),
        "value": 450,
        "value2": 362,
        "value3": 699
      }, {
        "date": new Date(2018, 0, 2),
        "value": 269,
        "value2": 450,
        "value3": 841
      }, {
        "date": new Date(2018, 0, 3),
        "value": 700,
        "value2": 358,
        "value3": 699
      }, {
        "date": new Date(2018, 0, 4),
        "value": 490,
        "value2": 367,
        "value3": 500
      }, {
        "date": new Date(2018, 0, 5),
        "value": 500,
        "value2": 485,
        "value3": 369
      }, {
        "date": new Date(2018, 0, 6),
        "value": 550,
        "value2": 354,
        "value3": 250
      }, {
        "date": new Date(2018, 0, 7),
        "value": 420,
        "value2": 350,
        "value3": 600
      }];

      // Create axes
      var categoryAxis = chart.xAxes.push(new am4charts.DateAxis());
      categoryAxis.renderer.grid.template.location = 0;
      //categoryAxis.renderer.minGridDistance = 30;

      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

      // Create series
      function createSeries(field, name) {
        var series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = field;
        series.dataFields.dateX = "date";
        series.name = name;
        series.tooltipText = "{dateX}: [b]{valueY}[/]";
        series.strokeWidth = 2;

        var bullet = series.bullets.push(new am4charts.CircleBullet());
        bullet.circle.stroke = am4core.color("#fff");
        bullet.circle.strokeWidth = 2;
      }

      createSeries("value", "Series #1");
      createSeries("value2", "Series #2");
      createSeries("value3", "Series #3");

      chart.legend = new am4charts.Legend();
      chart.cursor = new am4charts.XYCursor();

      function test() {
        chart.appear();
        chart.series.each(function (series) {
          series.appear();
        });
      }
    });
    this.zone.runOutsideAngular(() => {
      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      // Create chart instance
      var chart = am4core.create("chartdiv2", am4charts.PieChart);

      // Add data
      chart.data = [{
        "country": "Lithuania",
        "litres": 501.9
      }, {
        "country": "Czech Republic",
        "litres": 301.9
      }, {
        "country": "Ireland",
        "litres": 201.1
      }, {
        "country": "Germany",
        "litres": 165.8
      }, {
        "country": "Australia",
        "litres": 139.9
      }, {
        "country": "Austria",
        "litres": 128.3
      }, {
        "country": "UK",
        "litres": 99
      }, {
        "country": "Belgium",
        "litres": 60
      }, {
        "country": "The Netherlands",
        "litres": 50
      }];

      // Add and configure Series
      var pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "litres";
      pieSeries.dataFields.category = "country";
      pieSeries.innerRadius = am4core.percent(50);
      pieSeries.ticks.template.disabled = true;
      pieSeries.labels.template.disabled = true;

      var rgm = new am4core.LinearGradientModifier();
      rgm.brightnesses.push(0, - 0.4);
      pieSeries.slices.template.fillModifier = rgm;

      var rgm2 = new am4core.LinearGradientModifier();
      rgm2.brightnesses.push(0, - 0.4);

      pieSeries.slices.template.strokeModifier = rgm2;
      pieSeries.slices.template.strokeOpacity = 1;
      pieSeries.slices.template.strokeWidth = 1;


      chart.legend = new am4charts.Legend();
      chart.legend.position = "right";

      pieSeries.slices.template.events.on("validated", function (event) {
        /* let gradient = event.target.fillModifier.gradient
        gradient.rotation = event.target.middleAngle + 90;

        let gradient2 = event.target.strokeModifier.gradient
        gradient2.rotation = event.target.middleAngle + 90;*/
      })
    })
  }

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
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', author: 'shekar', duedate: '12-12-2020' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', author: 'shekar', duedate: '12-12-2020' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', author: 'shekar', duedate: '12-12-2020' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', author: 'shekar', duedate: '12-12-2020' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', author: 'shekar', duedate: '12-12-2020' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', author: 'shekar', duedate: '12-12-2020' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', author: 'shekar', duedate: '12-12-2020' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', author: 'shekar', duedate: '12-12-2020' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', author: 'shekar', duedate: '12-12-2020' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', author: 'shekar', duedate: '12-12-2020' },
];
