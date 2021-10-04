import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { FooterComponent } from './footer/footer.component';
import { PatientComponent } from './patient/patient.component';
import { VilleComponent } from './ville/ville.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { VilledetailsComponent } from './ville/villedetails/villedetails.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { RendezvousdetailsComponent } from './rendezvous/rendezvousdetails/rendezvousdetails.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { VilleReducer } from './ngrx/villes.reducer';
import { VilleEffects } from './ngrx/villes.effects';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    FooterComponent,
    PatientComponent,
    VilleComponent,
    LoginComponent,
    VilledetailsComponent,
    RendezvousComponent,
    RendezvousdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({catalogState:VilleReducer}),
    EffectsModule.forRoot([VilleEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    { provide: "BASE_API_URL", useValue: environment.base_url }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
