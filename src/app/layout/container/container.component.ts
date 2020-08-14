import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  Active: boolean = false;
  constructor() { }

  ngOnInit(): void {

  }
  Remove = () => {
    this.Active = false;
  }

  Toggle = () => {

    this.Active = true;
    // $('.collapse.in').toggleClass('in');
  }

}
