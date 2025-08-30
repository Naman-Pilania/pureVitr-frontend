import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilityService } from './utility.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient,
    private utilityService: UtilityService,

  ) { }

  registerUser(body: any) {
    return this.httpClient.post(`${environment.authBaseUrl}/register`, body);
  }

  loginUser(body: any) {
    return this.httpClient.post(`${environment.authBaseUrl}/login`, body);
  }
}
