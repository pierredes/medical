import { Component, Inject, OnInit } from '@angular/core';
import { Patient } from '../classes/patient';
import { Ville} from '../classes/ville';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOption = {
  headers: new HttpHeaders({
    'Authorization' : 'Basic cGllcnJlOjEyMzQ='
  })
};

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients: Array<Patient> = [];
  patient : Patient = new Patient();
  villes : Array<Ville> = [];
  

  constructor( private http : HttpClient) { }

  ngOnInit(): void {
    this.getPatient();
    this.updateVille();
}
    getPatient() : void {
      this.http.get<Patient[]>(environment.base_url+ "/ws/patient/", httpOption).subscribe(
        data => {
          this.patients = data;
        }
      )
    }

    updateVille() : void {
      this.http.get<Ville[]>( environment.base_url + "/ws/ville/", httpOption).subscribe(
        data => {
          console.log(data)
          this.villes = data;        
        }
      )
    }

    addPatient() : void {console.log(this.patient);
      this.http.post<Patient>(environment.base_url + "/ws/patient/", this.patient, httpOption).subscribe(
        data => {
          console.log(data);
          this.getPatient();
        }
      )
    } 
  

}
