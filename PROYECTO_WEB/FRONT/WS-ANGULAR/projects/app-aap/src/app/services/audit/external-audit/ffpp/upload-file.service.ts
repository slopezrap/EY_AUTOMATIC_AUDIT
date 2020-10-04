import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { urls, environment } from 'projects/app-aap/src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UploadFileService {
  constructor(private http: HttpClient) {}
  public upload(formData) {
    return this.http.post<any>(`${environment.apiURL}${urls.baseExternalAudit}${urls.baseFFPP}${urls.baseFFPPUploadFile}/`, formData);
  }
}