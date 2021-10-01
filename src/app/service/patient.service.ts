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

  getAllPatient(search : string): Observable<Patient[]> {
    let searchCondition = ""

    if( search.length > 0 ){
      searchCondition = "?search="+search; 
    }
    return this.http.get<Patient[]>(environment.base_url + "/ws/patient/" + searchCondition, httpOption);
  }

  addPatient(patient : Patient) : Observable<Patient> {
    return  this.http.post<Patient>(environment.base_url + "/ws/patient/", patient, httpOption);
  }

  deletePatient(id : number | undefined) : Observable<Object> {
    return this.http.delete(environment.base_url + "/ws/patient/delete/" + id, httpOption);
  }

  updatePatient(patient: Patient) : Observable<Patient> {
    return this.http.put<Patient>(environment.base_url + "/ws/patient/update/" + patient.id, patient, httpOption);
  }

  getPatientbyId(id: number | undefined) : Observable<Patient> {
    return this.http.get<Patient>(environment.base_url + "/ws/patient/" + id, httpOption);
  }

  getPatientByName(name: String | undefined) : Observable<Patient[]> {
    return this.http.get<Patient[]>(environment.base_url + "/ws/patient/?search=" + name, httpOption)
  }
}
