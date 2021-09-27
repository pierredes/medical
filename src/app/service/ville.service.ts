import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ville } from '../classes/ville';
import { httpOption } from '../variables';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  constructor(private http : HttpClient) { }

  GetAllVille() : Observable<Ville[]> {
    return this.http.get<Ville[]>(environment.base_url + "/ws/ville/", httpOption);
  }

  addVille(ville : Ville) : Observable<Ville> {
    return this.http.post<Ville>(environment.base_url + "/ws/ville/", ville, httpOption)
  }

  deleteVille(id : number | undefined) : Observable<Object> {
    return this.http.delete(environment.base_url + "/ws/ville/delete/" + id, httpOption)
  }
}
