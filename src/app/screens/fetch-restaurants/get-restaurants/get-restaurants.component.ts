import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service'; 

@Component({
  selector: 'app-get-restaurants',
  templateUrl: './get-restaurants.component.html',
  styleUrls: ['./get-restaurants.component.css']
})
export class GetRestaurantsComponent implements OnInit {

  constructor(public restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.restaurantService.fetchRestaurants(); 
  }
}



// import { Component } from '@angular/core';
// import { RestaurantService } from '../services/restaurant.service';

// @Component({
//   selector: 'app-get-restaurants',
//   templateUrl: './get-restaurants.component.html',
//   styleUrls: ['./get-restaurants.component.css']
// })
// export class GetRestaurantsComponent {
//   constructor(public restaurantService: RestaurantService) {
//     this.restaurantService.fetchRestaurants();
//   }
// }

