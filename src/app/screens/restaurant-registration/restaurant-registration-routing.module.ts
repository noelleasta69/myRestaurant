import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantRegistrationFormComponent } from './restaurant-registration-form/restaurant-registration-form.component';

const routes: Routes = [{path: '', component: RestaurantRegistrationFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRegistrationRoutingModule { }
