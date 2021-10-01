import { Component, OnInit } from '@angular/core';
import { Rendezvous } from '../classes/rendezvous';
import { RendezvousService } from '../service/rendezvous.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.component.html',
  styleUrls: ['./rendezvous.component.css'],
  providers: [DatePipe]
})
export class RendezvousComponent implements OnInit {

  rendezVous : Array<Rendezvous> = [];
  success : boolean = false;
  error : boolean = false;
  constructor(private rs : RendezvousService, private datePipe : DatePipe) { }

  ngOnInit(): void {
    this.rs.getAllRdv().subscribe(
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

}
