import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  @Input("First") First: boolean = false;
  @Input("Last") Last: boolean = false;
  @Input("Left") Left: boolean = false;
  @Input("Right") Right: boolean = false;
  @Input("Image") Image: string = '';
  @Input("Link") Link: string = '';
  @Input("Title") Title: string = '';
  @Input("Text") Text: string = '';
  @Input("Subtext") Subtext: string = '';
  @Input("ButtonText") ButtonText: string = '';

  constructor() { }

  ngOnInit(): void {
    if (this.Right && this.Left) {
      this.Right = false;
    }

    this.getSource();
  }

  getClasses(type: number): string {
    let classes = 'col-12 col-md-6 ';

    switch (type) {
      case 1:
        classes += 'p-0 bg-primary';
        classes += this.Left ? 'order-last order-md-first BorderRight' : 'order-last BorderLeft'
        break;
      case 2:
        classes += 'p-4 m-auto ';
        classes += this.Left ? 'order-first order-md-last' : 'order-first'
        break;
    }
    return classes;
  }

  getSource = () => {
    if (this.Image == '' || !this.Image) {
      this.Image = '../../../../assets/img/SVGs/colors/yellow.svg'
    }
  }

}
