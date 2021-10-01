import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationGuard } from './authentification.guard';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './patient/patient.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { RendezvousdetailsComponent } from './rendezvous/rendezvousdetails/rendezvousdetails.component';
import { VilleComponent } from './ville/ville.component';
import { VilledetailsComponent } from './ville/villedetails/villedetails.component';

const routes: Routes = [
  { path : 'patient', component : PatientComponent, canActivate : [AuthentificationGuard]},
  { path : 'ville', component : VilleComponent, canActivate : [AuthentificationGuard]},
  { path : 'ville/addedit/:id', component : VilledetailsComponent, canActivate : [AuthentificationGuard]},
  { path : 'login', component : LoginComponent},
  { path : 'rdv', component: RendezvousComponent, canActivate : [AuthentificationGuard]},
  { path : 'rdv/addedit/:id', component : RendezvousdetailsComponent, canActivate : [AuthentificationGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
