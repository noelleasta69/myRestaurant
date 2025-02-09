import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OwnerRegistrationService } from '../services/owner-registration.service';
import { OwnerRegistrationData } from 'src/app/models/ownerModels/OwnerRegistrationData';

@Component({
  selector: 'app-owner-registration-form',
  templateUrl: './owner-registration-form.component.html',
  styleUrls: ['./owner-registration-form.component.css']
})
export class OwnerRegistrationFormComponent  {
  // ownerForm!: FormGroup;

  ownerForm = new FormGroup({
    ownerFirstName: new FormControl('', Validators.required),
    ownerMiddleName: new FormControl('', Validators.required),
    ownerLastName: new FormControl('', Validators.required),
    countryCode: new FormControl('', Validators.required),
    ownerMobileNumber: new FormControl('', Validators.required),
    ownerEmail: new FormControl('', [Validators.required, Validators.email]),
    governmentIdType: new FormControl('pancard', Validators.required),
    governmentId: new FormControl(''),
    password: new FormControl('', Validators.required)
  });

  constructor (private ownerService : OwnerRegistrationService) {}

  onSubmit(): void {
    if (this.ownerForm.valid) {

      const ownerData: OwnerRegistrationData = this.ownerForm.value as OwnerRegistrationData; // Explicit type assertion << important>>// there is a better way to handel this ..
      
      this.ownerService.registerOwner(ownerData).subscribe({
        next: (response) => {
          console.log('Owner registered successfully:', response);
        },
        error: (error) => {
          console.error('Error registering owner:', error);
        }
      });
    } else {
      console.log(' Owner Form data is invalid');
    }
  }
}

