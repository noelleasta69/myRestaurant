import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerRegistrationFormComponent } from './owner-registration-form/owner-registration-form.component';

const routes: Routes = [{ path: '', component: OwnerRegistrationFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRegistrationRoutingModule { }
