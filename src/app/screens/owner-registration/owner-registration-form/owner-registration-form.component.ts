import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  onSubmit(): void {
    if (this.ownerForm.valid) {
      console.log(this.ownerForm.value);
    }
  }
}

