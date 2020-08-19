import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  sent: boolean = false;
  chill: boolean = false;

  constructor() { }
}
