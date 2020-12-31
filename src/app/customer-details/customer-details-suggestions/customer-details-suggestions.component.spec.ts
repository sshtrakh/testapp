import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailsSuggestionsComponent } from './customer-details-suggestions.component';

describe('CustomerDetailsSuggestionsComponent', () => {
  let component: CustomerDetailsSuggestionsComponent;
  let fixture: ComponentFixture<CustomerDetailsSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDetailsSuggestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailsSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
