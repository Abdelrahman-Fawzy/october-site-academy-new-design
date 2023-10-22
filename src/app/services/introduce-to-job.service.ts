import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JobIntroduce } from '../models/jobs';

const httpOptions = {
  headers: new HttpHeaders({
    Language: localStorage.getItem('currentLang')
  })
}

@Injectable({
  providedIn: 'root'
})
export class IntroduceToJobService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  introduceToJob(model: JobIntroduce) {
    return this.http.post(this.baseUrl + 'erp/jobs/create_job_request', model, httpOptions)
  }
}
