import { Component, OnInit, ViewChild } from '@angular/core';
import { Ville } from '../classes/ville';
import { VilleService } from '../service/ville.service';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent implements OnInit {

  villes : Array<Ville> = [];
  ville: Ville = new Ville();
  @ViewChild('closeModal') closeModal : any;

  constructor( private vs : VilleService ) { }


  ngOnInit(): void {
    this.getVilles();
  }

  getVilles() : void {
    this.vs.GetAllVille().subscribe(
      data => {
        this.villes = data;        
      }
    )
  }

  addVilleOnSubmitForm() : void {
    if(this.ville.id == undefined) {
      this.vs.addVille(this.ville).subscribe(
        data => {
          this.getVilles();
          this.closeModal.nativeElement.click();
        }
      )
    } else {
      this.vs.updateVille(this.ville).subscribe(
        data => {
          this.getVilles();
          this.closeModal.nativeElement.click();
        }
      )
    }
    
  }

  deleteVilleOnClick(id : number | undefined) : void {
    if(confirm("êtes vous sur de vouloir supprimer cette ville ?")) {
      this.vs.deleteVille(id).subscribe(
        data => {
          this.getVilles();
        }
      )
    } 
  }



  editVille(id : number | undefined) : void {
    this.vs.getVillebyId(id).subscribe(
      data => {
        this.ville = data;
        console.log(data)
      }
    )
  }



}
