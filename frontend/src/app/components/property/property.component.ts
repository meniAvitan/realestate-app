import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  properties: Array<any> = [
    {
    "Id": 1,
    "Name": "Brila houses",
    "Type": "House",
    "Price": 120000
    },
    {
    "Id": 2,
    "Name": "Erose villa",
    "Type": "villa",
    "Price": 1850000
    },
    {
    "Id": 3,
    "Name": "mike houses",
    "Type": "House",
    "Price": 134000
    },
    {
    "Id": 4,
    "Name": "sam villa",
    "Type": "villa",
    "Price": 2220000
    },
    {
    "Id": 5,
    "Name": "ari villa",
    "Type": "villa",
    "Price": 2045000
    },
    {
    "Id": 6,
    "Name": "jams houses",
    "Type": "House",
    "Price": 22000
    },
]

  constructor() { }

  ngOnInit(): void {
  }



}
