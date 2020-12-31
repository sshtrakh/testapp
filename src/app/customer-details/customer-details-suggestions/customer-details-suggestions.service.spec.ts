import { TestBed } from '@angular/core/testing';

import { CustomerDetailsSuggestionsService } from './customer-details-suggestions.service';

describe('CustomerDetailsSuggestionsService', () => {
  let service: CustomerDetailsSuggestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerDetailsSuggestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
