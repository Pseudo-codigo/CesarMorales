import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  @Input("First") First: boolean = false;
  @Input("Left") Left: boolean = false;
  @Input("Right") Right: boolean = false;
  @Input("Image") Image: string = '';
  @Input("Link") Link: string = '';
  @Input("Text") Text: string = '';
  @Input("ButtonText") ButtonText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
