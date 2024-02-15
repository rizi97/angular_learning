import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiURL = "http://localhost:7086/api"


  constructor(private http: HttpClient) {}
  

  getAllReservations() : Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiURL + "/patient")
  }

  getReservationById(id: number) : Observable<Reservation> {
    return this.http.get<Reservation>(this.apiURL + "/patient/" + id)
  }

  createReservation(reservation: Reservation) : Observable<void> {
    return this.http.post<void>(this.apiURL + "/patient/RegisterPatient", reservation)
  }

  updateReservation(id: number, reservation: Reservation) : Observable<void> {
    return this.http.put<void>(this.apiURL + "/patient/" + id, reservation)
  }

  deleteReservation(id: number) : Observable<void> {
    return this.http.delete<void>(this.apiURL + "/patient/" + id)
  }
}
