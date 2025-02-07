import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestaurantRegistrationService } from '../services/restaurant-registration.service';
import { RestaurantRegistrationData } from 'src/app/models/restaurantModels/RestaurantRegistrationData';

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

    constructor (private restaurantService: RestaurantRegistrationService) {}

  onSubmit(): void {
    if (this.restaurantForm.valid) {
      console.log(this.restaurantForm.value); 
      const restaurantData : RestaurantRegistrationData = this.restaurantForm.value as RestaurantRegistrationData;

      this.restaurantService.registerRestaurant(restaurantData).subscribe({
        next: (response) => {
          console.log("Restaurant registered succesfully: ", response);
        },
        error: (error) => {
          console.log("Error while registering the restaurant: ", error);
        }
      })
    } else {
      console.log("Restaurant form data is invalid");
    }
  }
}
