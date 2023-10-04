import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ContactUs } from '../models/contactUs';

const httpOptions = {
  headers: new HttpHeaders({
    Language: localStorage.getItem('currentLang')
  })
}

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  ContactUs(model: ContactUs) {
    return this.http.post(this.baseUrl + 'website/createContactUs', model, httpOptions)
  }
}
