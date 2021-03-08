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
      Title: 'TRABAJOS RECIENTES',
      Text: 'LOS 10 MEJORES ANUNCIOS QUE SE HAN REALIZADO RECIENTEMENTE PARA RADIO Y TELEVISIÓN.',
      Subtext: 'REEL 2020 - 2021',
      Link: 'https://google.com',
      Image: '../../../../assets/img/images/mic.webp',
    },
    {
      Title: 'ARCHIVO PUBLICITARIO',
      Text: 'UNA BREVE SELECCIÓN DE LOS ANUNCIOS QUE HICIERON HISTORIA Y CAMBIARON LA INDUSTRIA PUBLICITARIA EN EL PAÍS.',
      Subtext: 'REEL DE DÉCADAS',
      Link: 'https://google.com',
      Image: '../../../../assets/img/images/cassette.webp',
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
