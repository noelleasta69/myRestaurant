import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FetchRestaurantsRoutingModule } from './fetch-restaurants-routing.module';
import { GetRestaurantsComponent } from './get-restaurants/get-restaurants.component';


@NgModule({
  declarations: [
    GetRestaurantsComponent
  ],
  imports: [
    CommonModule,
    FetchRestaurantsRoutingModule
  ]
})
export class FetchRestaurantsModule { }
