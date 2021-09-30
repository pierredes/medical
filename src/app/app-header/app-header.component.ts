import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor( private router : Router) { }

  ngOnInit(): void {
  }

  isConnected() : boolean {
    if(sessionStorage.getItem("Connecter")) {
      return true;
    }
    return false;
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['login'])
  }

}
