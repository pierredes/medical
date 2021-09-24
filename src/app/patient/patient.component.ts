import { Component, OnInit } from '@angular/core';
import { Patient } from '../classes/patient';
import { Ville} from '../classes/ville';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';

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
  
  constructor( private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get<Patient[]>("http://localhost:8080/ws/patient/", httpOption).subscribe(
      data => {
        this.patients = data;
      }
    )
  }

}
