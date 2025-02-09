import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestaurantRequest } from 'src/app/models/restaurant-request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


// this coed uses observables(unicast)
export class RestaurantService {
  private apiUrl = 'http://localhost:3000/get-restaurants';

  constructor(private http: HttpClient) {}

  fetchRestaurants(): Observable<{ data: RestaurantRequest[] }> {
    return this.http.get<{ data: RestaurantRequest[] }>(this.apiUrl);
  }
}


// **************************************************

// below code uses http client ( that is the older way )



// export class RestaurantService {
//   restaurants: RestaurantRequest[] = []; 

//   constructor(private http: HttpClient) {}

//   fetchRestaurants() {
//     const apiUrl = 'http://localhost:3000/get-restaurants';

//     this.http.get<{ data: RestaurantRequest[] }>(apiUrl).subscribe({
//       next: (response) => {
//         this.restaurants = response.data;
//         console.log("Fetched restaurants:", this.restaurants);
//       },
//       error: (error) => {
//         console.error('Error fetching restaurants:', error);
//       }
//     });
//   }
// }


