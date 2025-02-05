import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRestaurantsComponent } from './get-restaurants.component';

describe('GetRestaurantsComponent', () => {
  let component: GetRestaurantsComponent;
  let fixture: ComponentFixture<GetRestaurantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetRestaurantsComponent]
    });
    fixture = TestBed.createComponent(GetRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
