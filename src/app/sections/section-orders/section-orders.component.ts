import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/orders';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    {
      id: 1,
      customer: {
        id: 1,
        name: 'Shoeb Shaji',
        state: 'Telangana',
        email: 'mainst@example.com',
  
      },
      total: 2130,
      placed: new Date(2017, 12, 1),
      fulfilled: new Date(2017, 12, 2),
      status: 'Completed'
    },
    {
      id: 2,
      customer: {
        id: 1,
        name: 'Rayyan Shaji',
        state: 'Illinois',
        email: 'mainst@example.com',
  
      },
      total: 2320,
      placed: new Date(2017, 12, 1),
      fulfilled: new Date(2017, 12, 2),
      status: 'Completed'
    },
    {
      id: 3,
      customer: {
        id: 1,
        name: 'Aasim Shaji',
        state: 'Illinois',
        email: 'mainst@example.com'
   
      },
      total: 130,
      placed: new Date(2017, 12, 1),
      fulfilled: new Date(2017, 12, 2),
      status: 'Completed'
    },
    {
      id: 4,
      customer: {
        id: 1,
        name: 'Ihtesham',
        state: 'IL',
        email: 'mainst@example.com',
     
      },
      total: 239,
      placed: new Date(2017, 12, 1),
      fulfilled: new Date(2017, 12, 2),
      status: 'Completed'
    },
    {
      id: 5,
      customer: {
        id: 1,
        name: 'Main St Bakery',
        state: 'CO',
        email: 'mainst@example.com',
      },
      total: 240,
      placed: new Date(2017, 12, 1),
      fulfilled: new Date(2017, 12, 2),
      status: 'Completed'
    }
  ];

  ngOnInit() {
  }

}
