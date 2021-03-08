import { Component, OnInit, AfterViewInit } from '@angular/core';

import Swiper, { Pagination, Navigation, Autoplay } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay]);

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
      slidesPerView: 1.7,
      centeredSlides: true,
      freeMode: true,
      spaceBetween: 0,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,

      },
      breakpoints: {
        500: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 0,
        },
      },
      observer: true,
      observeParents: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // pagination: {
      //   el: '.swiper-pagination',
      // },
    });
  }

}
