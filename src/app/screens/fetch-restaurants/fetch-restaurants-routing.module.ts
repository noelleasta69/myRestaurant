import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetRestaurantsComponent } from './get-restaurants/get-restaurants.component';

const routes: Routes = [{ path: '', component: GetRestaurantsComponent }]; // I only need to add this ..

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FetchRestaurantsRoutingModule { }
