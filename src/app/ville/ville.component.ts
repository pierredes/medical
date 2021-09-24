import { Component, OnInit } from '@angular/core';
import { Ville } from '../classes/ville';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';

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
  constructor( private http : HttpClient ) { }


  ngOnInit(): void {
    this.http.get<Ville[]>("http://localhost:8080/ws/ville/", httpOption).subscribe(
      data => {
        this.villes = data;
        console.log(data)
        
      }
    )
  }

}
