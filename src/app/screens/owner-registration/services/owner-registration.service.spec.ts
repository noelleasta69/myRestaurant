import { TestBed } from '@angular/core/testing';

import { OwnerRegistrationService } from './owner-registration.service';

describe('OwnerRegistrationService', () => {
  let service: OwnerRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwnerRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
