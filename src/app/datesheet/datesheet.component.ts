import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datesheet',
  templateUrl: './datesheet.component.html',
  styleUrls: ['./datesheet.component.css']
})
export class DatesheetComponent implements OnInit {
datesheet = [
  {'course':'cap917','date':'12 nov'},
  {'course':'cap918','date':'13 nov'},
  {'course':'cap919','date':'14 nov'},
];
  constructor() { }

  ngOnInit() {
  }

}
