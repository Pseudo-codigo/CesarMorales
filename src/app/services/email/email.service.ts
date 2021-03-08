import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { EmailModel } from "../../models/email-model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  sent: boolean = false;
  chill: boolean = false;
  Url: string = environment.API_URL;
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });


  constructor(
    private http: HttpClient,
  ) { }


  PostEmail(email: EmailModel): Observable<EmailModel> {
    return this.http.post<EmailModel>(this.Url + `email`, email, { headers: this.headers });
  }
}
