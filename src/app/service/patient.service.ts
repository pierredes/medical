import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient } from '../classes/patient';
import { httpOption } from '../variables';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http : HttpClient) { }

  getAllPatient(): Observable<Patient[]> {
    return this.http.get<Patient[]>(environment.base_url + "/ws/patient/", httpOption);
  }

  addPatient(patient : Patient) : Observable<Patient> {
    return  this.http.post<Patient>(environment.base_url + "/ws/patient/", patient, httpOption);
  }
}
