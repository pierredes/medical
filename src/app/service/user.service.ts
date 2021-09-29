import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { httpOption } from '../variables';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) {}

  authenticate(user : any) {
    return this.http.post<any>(environment.base_url + "/ws/login/", user, httpOption);
  }
}
