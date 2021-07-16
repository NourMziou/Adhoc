import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent  {
@Input() column:any | undefined;

constructor() { }
chart: Chart<"bar", number[], string> | undefined ;
arr=[46, 10, 5, 2, 20, 30, 45];
backcolor=[
'rgba(0, 0, 0, 0.9)',
'rgba(0, 0, 0, 0.9)',
'rgba(0, 0, 0, 0.9)',
'rgba(0, 0, 0, 0.9)',
'rgba(0, 0, 0, 0.9)',
'rgba(0, 0, 0, 0.9)',
'rgba(0, 0, 0, 0.9)'

];
ngOnInit(): void {

  this.data();
}

data() {
  this.chart = new Chart('canvas', {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'My First dataset',
        backgroundColor: this.backcolor,
        borderColor: 'rgba(0, 0, 0, 0.9)',
        data: this.arr
      }]
    },

    // Configuration options go here
   /* options: {
      tooltips: {
        mode: 'index'
    },
    responsive: true,
    maintainAspectRatio: true,
    animation: {
        duration: 0,
    },
    hover: {
        animationDuration: 0,
    },
    responsiveAnimationDuration: 0
   
    }*/
  });
}






}
