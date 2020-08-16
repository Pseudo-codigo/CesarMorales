import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ScrollService } from '../../services/scroll/scroll.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() ToggleEvent = new EventEmitter();
  constructor(
    public Scroll: ScrollService
  ) { }

  ngOnInit(): void {
  }

  Toggle() {
    this.ToggleEvent.emit();
  }

  ScrollToView() {
    this.Scroll.ScrollToView('#content');
  }

}
