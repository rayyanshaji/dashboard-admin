import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  public pieChartData: number[] = [250, 350, 720];
  public pieChartLabels: string[] = ['UberEats', 'Zomato', 'Swiggy'];
  public colors: any[] = [
    {
      backgroundColor: ['#45AC11', '#DA1212', '#FD5A09'],
      borderColor: '#111'
    }
  ];

  public pieChartType = 'doughnut';

  ngOnInit() {
  }

}
