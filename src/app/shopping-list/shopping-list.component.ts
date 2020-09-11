import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  testShoppingItems = [
    'pickles',
    'burgers',
    'ketchup',
    'yogurt'
  ];

  furtherTestData = [
    '16oz jar',
    '2 packages',
    '4 bottles',
    '3 tubs'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
