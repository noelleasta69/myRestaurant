import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RestaurantRegistrationRoutingModule } from './restaurant-registration-routing.module';
import { RestaurantRegistrationFormComponent } from './restaurant-registration-form/restaurant-registration-form.component';


@NgModule({
  declarations: [
    RestaurantRegistrationFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RestaurantRegistrationRoutingModule
  ]
})
export class RestaurantRegistrationModule { }
