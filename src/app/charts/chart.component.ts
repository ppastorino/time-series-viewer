import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';
 
import { BaseChartDirective } from 'ng2-charts';

import {MatSelectionList} from '@angular/material/list';

@Component({
  selector: 'utp-chart',
  templateUrl: './chart.component.html'
})
export class ChartComponent implements OnInit {

  @ViewChild(MatSelectionList) seriesList: MatSelectionList;

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

  series = ['dolar','merval'];

  dirty:boolean = false;
  valid:boolean = false;
  showInProgress:boolean = false;

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
  }

  onSeriesListChanged(){
    this.dirty = true;
    if(this.seriesList.selectedOptions.selected.length == 0){
      this.valid = false;
      return;
    }
    this.valid = true;
  }
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  public showClicked() : void {
    this.lineChartData=null;
    this.showInProgress=true;
    this.http.get("https://time-series-service.herokuapp.com/api/v1/stat/2017")
    .subscribe((data: any) => {
      //No esta tomando bien el time zone ya que lo 'adapta' al timezone local y e UTC
      this.lineChartLabels = data.index.map(n => new Date(parseInt(n) /(1000 * 1000)).toLocaleDateString());
      this.lineChartData = data.values;
      this.dirty = false;
      this.showInProgress=false;
    });
  }

  
}