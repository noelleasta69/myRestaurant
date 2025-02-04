import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerRegistrationFormComponent } from './screens/owner-registration/owner-registration-form/owner-registration-form.component';
import { RestaurantRegistrationFormComponent } from './screens/restaurant-registration/restaurant-registration-form/restaurant-registration-form.component';
import { GetRestaurantsComponent } from './screens/fetch-restaurants/get-restaurants/get-restaurants.component';



const routes: Routes = [
  { path: 'owner-registration', component: OwnerRegistrationFormComponent },
  { path: 'restaurant-registration', component: RestaurantRegistrationFormComponent },
  { path: '', redirectTo: '/owner-registration', pathMatch: 'full' },  
  {path: 'restaurants', component: GetRestaurantsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
