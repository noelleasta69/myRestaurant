import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service'; 
import { RestaurantRequest } from 'src/app/models/restaurant-request';

@Component({
  selector: 'app-get-restaurants',
  templateUrl: './get-restaurants.component.html',
  styleUrls: ['./get-restaurants.component.css']
})




export class GetRestaurantsComponent {
  restaurants: RestaurantRequest[] = [];  

  constructor(private restaurantService: RestaurantService) {
    this.fetchRestaurants();  
  }

  fetchRestaurants() {
    this.restaurantService.fetchRestaurants().subscribe({
      next: (response) => {
        this.restaurants = response.data; 
        console.log("Fetched restaurants:", this.restaurants);
      },
      error: (error) => {
        console.error('Error fetching restaurants:', error);
      }
    });
  }
}


// for older way of fetching the data from backend ***********************


// export class GetRestaurantsComponent implements OnInit {

//   constructor(public restaurantService: RestaurantService) {}

//   ngOnInit(): void {
//     this.restaurantService.fetchRestaurants(); 
//   }
// }















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

