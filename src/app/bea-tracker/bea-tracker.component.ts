import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bea-tracker',
  templateUrl: './bea-tracker.component.html',
  styleUrls: ['./bea-tracker.component.scss']
})
export class BeaTrackerComponent implements OnInit {

  testData = [
    'fed @ 7am',
    'taken for a walk 9am; peed and pooped',
    'peed 11am',
    'pooped 12pm',
    'snack at 1:30pm'
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
