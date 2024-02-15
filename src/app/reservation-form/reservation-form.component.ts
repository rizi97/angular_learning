import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  myForm!: FormGroup;

  private edit_page_id : number = +this.activateRoute.snapshot.paramMap.get("id")!

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private activateRoute: ActivatedRoute,
    private reservationService: ReservationService
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      patientName: ['', Validators.required],
      patientGender: ['', Validators.required],
      patientEmail: ['', [Validators.required, Validators.email]],
      patientPassword: ['', Validators.required],
    });

    
    // edit/:id Route
    if( this.edit_page_id ) {

      this.reservationService.getReservationById(this.edit_page_id).subscribe(data => {
        if( data )
          this.myForm.patchValue(data)
      })

    }


  }
  

  onSubmit(): void {
    if (this.myForm.valid) {

      let newReservation : Reservation = this.myForm.value

      if(this.edit_page_id) {
        // Update
        // this.reservationService.updateReservation(this.edit_page_id, newReservation)
      }
      else {
        // Create
        this.reservationService.createReservation(newReservation)
      }

      this.router.navigate(['/list'])      
    }
  }
}
