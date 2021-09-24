import { Component, Inject, OnInit } from '@angular/core';
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
  constructor( private http : HttpClient, @Inject('BASE_API_URL') private baseUrl: string ) { }


  ngOnInit(): void {
    this.http.get<Ville[]>( this.baseUrl + "/ws/ville/", httpOption).subscribe(
      data => {
        this.villes = data;
        console.log(data)
        
      }
    )
  }

}
