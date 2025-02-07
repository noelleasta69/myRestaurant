import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OwnerRegistrationFormComponent } from './screens/owner-registration/owner-registration-form/owner-registration-form.component';
import { RestaurantRegistrationFormComponent } from './screens/restaurant-registration/restaurant-registration-form/restaurant-registration-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { GetRestaurantsComponent } from './screens/fetch-restaurants/get-restaurants/get-restaurants.component';

import { SharedModule } from './shared/shared.module'; //Why do i have to do this

@NgModule({
  declarations: [
    AppComponent,
    OwnerRegistrationFormComponent,
    RestaurantRegistrationFormComponent,
    GetRestaurantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
