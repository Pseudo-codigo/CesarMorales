import { Component, OnInit, AfterViewInit } from '@angular/core';

import Swiper from 'swiper';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    const mySwiper = new Swiper('.swiper-container', {
      loop: true,
      freeMode: true,
      slidesPerView: 2,
      autoplay: {
        delay: 1000
      },
      breakpoints: {
        640: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
      },
      observer: true,
      observeParents: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

}
