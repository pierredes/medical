import { Component, OnInit } from '@angular/core';
import { Rendezvous } from '../classes/rendezvous';
import { RendezvousService } from '../service/rendezvous.service';

@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.component.html',
  styleUrls: ['./rendezvous.component.css']
})
export class RendezvousComponent implements OnInit {

  rendezVous : Array<Rendezvous> = [];
  constructor(private rs : RendezvousService) { }

  ngOnInit(): void {
    this.rs.getAllRdv().subscribe(
      data => {
        this.rendezVous = data;
      }
    )
  }

}
