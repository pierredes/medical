import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/classes/patient';
import { Rendezvous } from 'src/app/classes/rendezvous';
import { PatientService } from 'src/app/service/patient.service';
import { RendezvousService } from 'src/app/service/rendezvous.service';

@Component({
  selector: 'app-rendezvousdetails',
  templateUrl: './rendezvousdetails.component.html',
  styleUrls: ['./rendezvousdetails.component.css']
})
export class RendezvousdetailsComponent implements OnInit {

  rendezvous : Rendezvous = new Rendezvous();
  patients : Array<Patient> = [];
  search: string = "";

  constructor(private rs : RendezvousService, private activatedRoute : ActivatedRoute, private router : Router, private ps : PatientService) { }

  ngOnInit(): void {
    let rdvid = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    if(rdvid > 0 ) {
      this.rs.getRdvById(rdvid).subscribe(
      data => {
        this.rendezvous = data;
        this.router.navigate(['rendezvous'])
      },
      error => {
        console.log(error)
      }
    )
    }
    
    this.getAllPatient()
  }

  getAllPatient() : void {
    this.ps.getAllPatient(this.search).subscribe (
      data => {
        this.patients = data;
      }
    )
  }

  addRdvOnSubmit() : void {
    if(this.rendezvous.id == undefined) {
      this.rs.addRendezvous(this.rendezvous).subscribe(
        data => {
          this.rendezvous=data;
          this.router.navigate(['rdv'])
        },
        error => {
          console.log("erreur :" + error)
        }
      )
    } else {
      this.rs.updateRendezvous(this.rendezvous).subscribe(
        data => {
          this.rendezvous=data;
          this.router.navigate(['rdv'])
        },
        error => {
          console.log("erreur :" + error)
        }
      )
    }
    
  }

  compareFn(c1: Patient, c2: Patient): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
}

}
