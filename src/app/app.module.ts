import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new', component: ReservationFormComponent },
  { path: 'list', component: ReservationListComponent },
  { path: 'edit/:id', component: ReservationFormComponent },
];

@NgModule({
  declarations: [ 
    AppComponent, 
    HomeComponent, 
    ReservationFormComponent, 
    ReservationListComponent 
  ],
  imports:      [ 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes) 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

