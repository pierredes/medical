import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error : boolean = false;
  user = {
    username : "",
    password : ""
  } 

  constructor(private us : UserService, private router : Router) { }

  ngOnInit(): void {
  }

  authenticate() : void{
    this.us.authenticate(this.user).subscribe(
      data => {
        if(data.id > 0) {
          sessionStorage.setItem('Connecter', data);
          this.router.navigate(['patient']);
        } else {
          this.error = true;
        }
      },
      error => {
        this.error = true;
      }
    )
  }

}
