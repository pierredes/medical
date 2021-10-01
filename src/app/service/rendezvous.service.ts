import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rendezvous } from '../classes/rendezvous';
import { httpOption } from '../variables';

@Injectable({
  providedIn: 'root'
})
export class RendezvousService {

  constructor(private router : Router, private http : HttpClient ) { }

  getAllRdv() : Observable<Rendezvous[]> {
    return this.http.get<Rendezvous[]>(environment.base_url + "/ws/rdv/", httpOption);
  }

  addRendezvous(rendezvous : Rendezvous) : Observable<Rendezvous> {
    return this.http.post<Rendezvous>(environment.base_url + "/ws/rdv/", rendezvous, httpOption);
  }

  updateRendezvous(rendezvous : Rendezvous) : Observable<Rendezvous> {
    return this.http.put<Rendezvous>(environment.base_url + "/ws/rdv/", rendezvous, httpOption);
  }

  getRdvById(id: number | undefined) : Observable<Rendezvous> {
    return this.http.get<Rendezvous>(environment.base_url + "/ws/rdv/" + id, httpOption);
  }
}
