import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantRegistrationData } from 'src/app/models/restaurantModels/RestaurantRegistrationData';

@Injectable({
  providedIn: 'root'
})
export class RestaurantRegistrationService {
  private apiUrl = 'http://localhost:3000/register-owner';
  constructor(private http:HttpClient) { }

  registerRestaurant(restaurantData: RestaurantRegistrationData): Observable<any>{
    return this.http.post<any>(this.apiUrl, restaurantData)
  }
}
