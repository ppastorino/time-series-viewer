import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';
 
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'utp-chart',
  templateUrl: './chart.component.html'
})
export class ChartComponent implements OnInit {

  // lineChart
  public lineChartData:Array<any>;
  // = [
  //  {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  //  {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
  //  {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  //];

  public lineChartLabels:Array<any> = [];
  //= ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public lineChartOptions:any = {
    responsive: true
  };

  public lineChartColors:Array<any> = [
    { // green
      //backgroundColor: 'rgba(0, 255, 0, 2)',
      //borderColor: 'rgba(0, 255, 0, 1)',
      //pointBackgroundColor: 'rgba(0, 255, 0, 1)',
      //pointBorderColor: '#fff',
      //pointHoverBackgroundColor: '#fff',
      //pointHoverBorderColor: 'rgba(0, 255, 0, 1)'
      backgroundColor: 'rgba(0, 255, 0,0.2)',
      borderColor: 'rgba(0, 255, 0,1)',
      pointBackgroundColor: 'rgba(0, 255, 0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(0, 255, 0,1)'

    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';


  @ViewChild(BaseChartDirective) private _chart;
  
  constructor(private http: HttpClient) { 

  }

  ngOnInit(): void {
    // this.http.get("http://localhost:8000/api/v1/stat/2017_11")
    this.http.get("https://time-series-service.herokuapp.com/api/v1/stat/2017")
    .subscribe((data: any) => {
      //No esta tomando bien el time zone ya que lo 'adapta' al timezone local y e UTC
      this.lineChartLabels = data.index.map(n => new Date(parseInt(n) /(1000 * 1000)).toLocaleDateString());
      this.lineChartData = data.values;
    });
  }

  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}