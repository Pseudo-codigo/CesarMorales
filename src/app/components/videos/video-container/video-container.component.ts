import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-video-container',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.scss']
})
export class VideoContainerComponent implements OnInit {
  Videos = [];

  Vids = [
    {
      Title: 'VIDEOS RECIENTES 2018',
      Text: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPI- SCING ELIT, SED DIAM NONUMMY NIBH EUISMOD TINCID- UNT UT LAOREET DOLORE MAGNA ALIQUAM ERAT VOLUT- PAT. UT WISI',
      Subtext: 'LOREM IPSUM DOLOR SIT AMET',
      Link: 'https://google.com',
      Image: '../../../../assets/img/SVGs/colors/purple.svg',
    },
    {
      Title: 'VIDEOS RECIENTES 2019',
      Text: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPI- SCING ELIT, SED DIAM NONUMMY NIBH EUISMOD TINCID- UNT UT LAOREET DOLORE MAGNA ALIQUAM ERAT VOLUT- PAT. UT WISI',
      Subtext: 'LOREM IPSUM DOLOR SIT AMET',
      Link: 'https://google.com',
      Image: '../../../../assets/img/SVGs/colors/green.svg',
    },
  ]

  constructor() { }

  ngOnInit(): void {
    this.GetVideos();
    console.log(this.Videos)
  }

  GetVideos() {

    this.Vids.map((video, index) => {
      let first: boolean = false;
      let last: boolean = false;
      let left: boolean = false;
      let right: boolean = false;

      if (index === 0) {
        first = true
      }
      else if (index === this.Vids.length - 1) {
        last = true
      }

      if (index % 2) {
        left = true
      }
      else {
        right = true
      }

      let videoTemp = {
        First: first,
        Last: last,
        Left: left,
        Right: right,
        Image: video.Image,
        Link: video.Link,
        Title: video.Title,
        Text: video.Text,
        Subtext: video.Subtext,
      }

      this.Videos.push(videoTemp);

    });
  }

}
