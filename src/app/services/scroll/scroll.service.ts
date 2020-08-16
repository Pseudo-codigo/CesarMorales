import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }

  ScrollToView(element) {
    document.querySelector(element).scrollIntoView({
      behavior: 'smooth'
    });
  }
}
