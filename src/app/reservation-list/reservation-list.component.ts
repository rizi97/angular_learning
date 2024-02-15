import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  reservations : Reservation[] = []

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.reservationService.getAllReservations().subscribe(data => {
      // console.log("data: ", data)

      this.reservations = data
    })
  }

  deleteReservation(id: number) {
    this.reservationService.deleteReservation(id).subscribe(() => {
      console.log("Delete request got processed.")

      this.reservationService.getAllReservations().subscribe(data => {
        this.reservations = data
      })
      
    })
  }
}
