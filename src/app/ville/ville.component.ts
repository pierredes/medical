import { Component, Inject, OnInit } from '@angular/core';
import { Ville } from '../classes/ville';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOption = {
  headers: new HttpHeaders({
    'Authorization' : 'Basic cGllcnJlOjEyMzQ='
  })
};

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent implements OnInit {

  villes : Array<Ville> = [];
  ville: Ville = new Ville();

  constructor( private http : HttpClient ) { }


  ngOnInit(): void {
    this.updateVille();
  }

  updateVille() : void {
    this.http.get<Ville[]>( environment.base_url + "/ws/ville/", httpOption).subscribe(
      data => {
        this.villes = data;        
      }
    )
  }

  addVille() : void {
    this.http.post<Ville>(environment.base_url + "/ws/ville/", this.ville, httpOption).subscribe(
      data => {
        this.updateVille();
      }
    )
  }

}
