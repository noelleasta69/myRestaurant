import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  restaurants: any[] = []; 
  constructor(private http: HttpClient) {}

  fetchRestaurants() {
    const apiUrl = 'http://localhost:3000/get-restaurants';
    
    this.http.get<{ data: any[] }>(apiUrl).subscribe({
      next: (response) => {
        this.restaurants = response.data;  // Store fetched data in the array
        console.log("Fetched restaurants:", this.restaurants);
      },
      error: (error) => {
        console.error('Error fetching restaurants:', error);
      }
    });
  }
}
