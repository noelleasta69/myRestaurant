import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { OwnerRegistrationRoutingModule } from './owner-registration-routing.module';
import { OwnerRegistrationFormComponent } from './owner-registration-form/owner-registration-form.component';


@NgModule({
  declarations: [
    OwnerRegistrationFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OwnerRegistrationRoutingModule
  ]
})
export class OwnerRegistrationModule { }
