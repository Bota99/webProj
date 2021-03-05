import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  message: string;
  constructor() {
    this.message = 'Art Blog';
  }

  ngOnInit(): void {
  }

}
