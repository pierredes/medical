import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Patient } from '../classes/patient';
import { Ville} from '../classes/ville';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PatientService } from '../service/patient.service';
import { VilleService } from '../service/ville.service';

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
  @ViewChild('closebuttun') closebuttun: any;
  ville : Ville = new Ville();
  

  constructor( private ps : PatientService, private vs : VilleService) { }

  ngOnInit(): void {
    this.getPatient();
    this.updateVille();
}
    getPatient() : void {
      this.ps.getAllPatient().subscribe(
        data => {
          this.patients = data;
        }
      )
    }

    updateVille() : void {
      this.vs.GetAllVille().subscribe(
        data => {
          this.villes = data;        
        }
      )
    }

    addPatient() : void {
      if(this.patient.id == undefined) {
        this.ps.addPatient(this.patient).subscribe(
          data => {
            this.closebuttun.nativeElement.click();
            this.getPatient();
          }
        ) 
      } else {
        this.ps.updatePatient(this.patient).subscribe(
          data => {
            this.closebuttun.nativeElement.click();
            this.getPatient();
          }
        )
      }
      
    }

    deletePatientOnClick(id : number | undefined) {
      this.ps.deletePatient(id).subscribe(
        data => {
          this.getPatient();
          console.log("ok")
        }
      )
    }

    editPatient(id : number | undefined) : void {
      this.ps.getPatientbyId(id).subscribe(
        data => {
          this.patient = data;
          console.log(this.patient.ville?.nom)
        }
      )
    }

    compareFn(c1: Ville, c2: Ville): boolean {
      return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  

}
