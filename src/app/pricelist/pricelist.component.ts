import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.component.html',
  styleUrls: ['./pricelist.component.css']
})
export class PricelistComponent implements OnInit {
pricelist=[
  {'id':'101','price':'1100'},
  {'id':'102','price':'1000'}
];
 
  constructor() { }

  ngOnInit() {
  }

}
