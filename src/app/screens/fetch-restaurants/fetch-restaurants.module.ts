import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchRestaurantsRoutingModule } from './fetch-restaurants-routing.module';
import { GetRestaurantsComponent } from './get-restaurants/get-restaurants.component';
import { SharedModule } from 'src/app/shared/shared.module';


// import { RestaurantCardComponent } from 'src/app/shared/restaurant-card/restaurant-card.component'; // why not this?? 

/* Note: if im importing sharedModule here and then using it then its not working , but
if i import it in app.module.ts and then use it then its working ??? whyyy */



@NgModule({
  declarations: [
    GetRestaurantsComponent
  ],
  imports: [
    CommonModule,
    FetchRestaurantsRoutingModule,
    SharedModule  
  ]
})
export class FetchRestaurantsModule { }
