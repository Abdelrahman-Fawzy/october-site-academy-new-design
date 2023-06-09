import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../models/Register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl = 'https://6oaerp.6ohd.com/api/';

  constructor(private http: HttpClient) { }

  Register(model: Register) {
    return this.http.post(this.baseUrl + 'erp/callcenters/register_new_client', model)
  }
}
