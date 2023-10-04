import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GraduationYears } from '../models/graduationYears';
import { Qualifications } from '../models/qualifications';
import { Governorates } from '../models/governorates';
import { Sections } from '../models/sections';
import { Branches } from '../models/branches';
import { Acquaintance } from '../models/acquaintance';
import { Countries } from '../models/countries';
import { JobByCode, JobsList } from '../models/jobs';

const httpOptions = {
  headers: new HttpHeaders({
    Language: localStorage.getItem('currentLang')
  })
}

@Injectable({
  providedIn: 'root'
})
export class GetItemsService {

  baseUrl = 'https://6oaerp.6ohd.com/api/';

  constructor(private http: HttpClient) { }

  getGraduationYears(): Observable<GraduationYears> {
    return this.http.post<GraduationYears>(this.baseUrl + 'erp/institutionsManagement/get_graduationYear', {}, httpOptions)
  }

  getQualifications(): Observable<Qualifications> {
    return this.http.post<Qualifications>(this.baseUrl + 'erp/institutionsManagement/get_qualifications', {}, httpOptions)
  }

  getCountries(): Observable<Countries> {
    return this.http.post<Countries>(this.baseUrl + 'erp/institutionsManagement/get_countries', {}, httpOptions)
  }

  getGovernorates(): Observable<Governorates> {
    return this.http.post<Governorates>(this.baseUrl + 'erp/institutionsManagement/get_governorates', {}, httpOptions)
  }

  getSections(): Observable<Sections> {
    return this.http.post<Sections>(this.baseUrl + 'erp/institutionsManagement/get_sections', {}, httpOptions)
  }

  getBranches(): Observable<Branches> {
    return this.http.post<Branches>(this.baseUrl + 'erp/institutionsManagement/get_branches', {}, httpOptions)
  }

  getAcquaintances(): Observable<Acquaintance> {
    return this.http.post<Acquaintance>(this.baseUrl + 'erp/institutionsManagement/get_acquaintances', {}, httpOptions)
  }

  getJobs(): Observable<JobsList> {
    return this.http.post<JobsList>(this.baseUrl + 'erp/jobs/getjobs', {}, httpOptions)
  }

  getJobByCode(code): Observable<JobByCode> {
    return this.http.post<JobByCode>(this.baseUrl + 'erp/jobs/getJobsByCode', code, httpOptions)
  }
}
