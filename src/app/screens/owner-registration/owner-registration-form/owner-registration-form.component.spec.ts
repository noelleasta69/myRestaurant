import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerRegistrationFormComponent } from './owner-registration-form.component';

describe('OwnerRegistrationFormComponent', () => {
  let component: OwnerRegistrationFormComponent;
  let fixture: ComponentFixture<OwnerRegistrationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerRegistrationFormComponent]
    });
    fixture = TestBed.createComponent(OwnerRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
