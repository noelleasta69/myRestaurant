import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OwnerRegistrationData } from 'src/app/models/ownerModels/OwnerRegistrationData';

@Injectable({
  providedIn: 'root'
})
export class OwnerRegistrationService {
  private apiUrl = 'http://localhost:3000/register-owner';

  constructor(private http: HttpClient) {}

  registerOwner (ownerData: OwnerRegistrationData) : Observable<any>{
    return this.http.post<any>(this.apiUrl, ownerData)
  }


}
