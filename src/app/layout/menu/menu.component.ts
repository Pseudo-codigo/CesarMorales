import { Component, OnInit, Input } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll/scroll.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input("Sidebar") Sidebar: boolean = false;
  constructor(
    public Scroll: ScrollService,
  ) { }

  ngOnInit(): void {
  }

  ScrollToView(element) {
    this.Scroll.ScrollToView(element);
  }

}
