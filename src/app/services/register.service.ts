import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../models/Register';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    Language: localStorage.getItem('currentLang')
  })
}

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  Register(model: Register) {
    return this.http.post(this.baseUrl + 'erp/callcenters/register_new_client', model, httpOptions)
  }
}
