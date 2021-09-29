import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationGuard } from './authentification.guard';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './patient/patient.component';
import { VilleComponent } from './ville/ville.component';

const routes: Routes = [
  { path : 'patient', component : PatientComponent, canActivate : [AuthentificationGuard]},
  { path : 'ville', component : VilleComponent, canActivate : [AuthentificationGuard]},
  { path : 'login', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
