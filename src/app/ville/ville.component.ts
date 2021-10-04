import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ville } from '../classes/ville';
import { getAllVilleAction } from '../ngrx/villes.actions';
import { VilleState, VilleStateEnum } from '../ngrx/villes.reducer';
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
  sucess : boolean = false;
  error : boolean = false;
  search : string = "";

  VilleState$ : Observable<VilleState> | null=null;
  readonly VillesStateEnum = VilleStateEnum;

  constructor( private vs : VilleService, private store: Store<any> ) { }


  // ngOnInit(): void {
  //   this.getVilles();
  // }

  ngOnInit() : void {
    this.VilleState$ = this.store.pipe(
      map((state) => state.catalogState)
    );

    this.store.dispatch(new getAllVilleAction({}))
  }


  getVilles() : void {
    // this.vs.GetAllVille().subscribe(
    //   data => {
    //     this.villes = data;        
    //   }
    // )
  }


  deleteVilleOnClick(id : number | undefined) : void {
    if(confirm("êtes vous sur de vouloir supprimer cette ville ?")) {
      this.vs.deleteVille(id).subscribe(
        data => {
          this.getVilles();
          this.sucess = true;
        },
        error => {
          console.log("erreur :" + error)
          this.error = true;
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

  resetForm() : void {
    this.error = false;
    this.sucess = false;
    this.ville = new Ville;
  }



}
