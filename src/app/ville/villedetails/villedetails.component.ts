import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ville } from 'src/app/classes/ville';
import { VilleService } from 'src/app/service/ville.service';
import { VilleComponent } from '../ville.component';

@Component({
  selector: 'app-villedetails',
  templateUrl: './villedetails.component.html',
  styleUrls: ['./villedetails.component.css']
})
export class VilledetailsComponent implements OnInit {

  ville : Ville = new Ville();

  constructor(private vs : VilleService, private activatedRoute : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let villeid = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.vs.getVillebyId(villeid).subscribe(
      data => {
        this.ville = data;
      },
      error => {
        console.log(error)
      }
    )
  }

 
  addVilleOnSubmitForm() : void {
    if(this.ville.id == undefined) {
      this.vs.addVille(this.ville).subscribe(
        data => {
          this.ville=data;
          this.router.navigate(['ville'])
        },
        error => {
          console.log("erreur :" + error)
        }
      )
    } else {
      this.vs.updateVille(this.ville).subscribe(
        data => {
          this.ville=data;
          this.router.navigate(['ville'])
        },
        error => {
          console.log("erreur :" + error)
        }
      )
    }
    
  }

}
