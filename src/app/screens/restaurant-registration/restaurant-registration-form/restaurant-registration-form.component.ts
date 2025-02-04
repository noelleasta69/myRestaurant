import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-restaurant-registration-form',
  templateUrl: './restaurant-registration-form.component.html',
  styleUrls: ['./restaurant-registration-form.component.css']
})
export class RestaurantRegistrationFormComponent {
    restaurantForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      ownerName: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      zipcode: new FormControl('', [Validators.required, Validators.pattern(/^\d{5,6}$/)]),
      cuisine: new FormControl('', [Validators.required]),
      contactNumber: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
      ownerEmail: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

  onSubmit(): void {
    if (this.restaurantForm.valid) {
      console.log(this.restaurantForm.value); 
    }
  }
}
