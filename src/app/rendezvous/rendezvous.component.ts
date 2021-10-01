import { Component, OnInit } from '@angular/core';
import { Rendezvous } from '../classes/rendezvous';
import { RendezvousService } from '../service/rendezvous.service';
import { DatePipe } from '@angular/common';
import { Patient } from '../classes/patient';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.component.html',
  styleUrls: ['./rendezvous.component.css'],
  providers: [DatePipe]
})
export class RendezvousComponent implements OnInit {

  patients : Array<Patient> = [];
  rendezvous : Rendezvous = new Rendezvous();
  rendezVous : Array<Rendezvous> = [];
  success : boolean = false;
  error : boolean = false;
  search : string = "";

  constructor(private rs : RendezvousService, private datePipe : DatePipe, private ps : PatientService) { }

  ngOnInit(): void {
    this.getAllRdv()
    this.getAllPatient()
  }

  getAllRdv() : void {
    this.rs.getAllRdv(this.search).subscribe(
      data => {
        this.rendezVous = data;
        this.rendezVous.forEach(element => {
          element.date = this.datePipe.transform(element.date, 'dd/MM/yyyy HH:mm')
        });
      }
    )
  }

  deleterdv(id: number | undefined) : void {
    this.rs.deleteRdv(id).subscribe(
      data => {
        console.log(data)
        this.success = true;
      },
      error => {
        console.log(error)
        this.error = true
      }
    )
  }
  getAllPatient() : void {
    this.ps.getAllPatient(this.search).subscribe (
      data => {
        this.patients = data;
      }
    )
  }


}
