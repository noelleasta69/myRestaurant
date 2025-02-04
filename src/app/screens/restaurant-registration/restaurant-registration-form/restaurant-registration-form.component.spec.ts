import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantRegistrationFormComponent } from './restaurant-registration-form.component';

describe('RestaurantRegistrationFormComponent', () => {
  let component: RestaurantRegistrationFormComponent;
  let fixture: ComponentFixture<RestaurantRegistrationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantRegistrationFormComponent]
    });
    fixture = TestBed.createComponent(RestaurantRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
