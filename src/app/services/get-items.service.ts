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
    return this.http.post<GraduationYears>(this.baseUrl + 'erp/registers/get_graduationYear', {}, httpOptions)
  }

  getQualifications(): Observable<Qualifications> {
    return this.http.post<Qualifications>(this.baseUrl + 'erp/registers/get_qualifications', {}, httpOptions)
  }

  getCountries(): Observable<Countries> {
    return this.http.post<Countries>(this.baseUrl + 'erp/countries/get_countries', {}, httpOptions)
  }

  getGovernorates(): Observable<Governorates> {
    return this.http.post<Governorates>(this.baseUrl + 'erp/registers/get_governorate', {}, httpOptions)
  }

  getSections(): Observable<Sections> {
    return this.http.post<Sections>(this.baseUrl + 'erp/registers/get_sections', {}, httpOptions)
  }

  getBranches(): Observable<Branches> {
    return this.http.post<Branches>(this.baseUrl + 'erp/registers/get_branches', {}, httpOptions)
  }

  getAcquaintances(): Observable<Acquaintance> {
    return this.http.post<Acquaintance>(this.baseUrl + 'erp/registers/get_acquaintance', {}, httpOptions)
  }
}
