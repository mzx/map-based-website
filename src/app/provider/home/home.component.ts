import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  navLinks = [
    {path: 'products', label: 'Products'},
    {path: 'orders', label: 'Orders'},
    {path: 'outlets', label: 'Outlets'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
