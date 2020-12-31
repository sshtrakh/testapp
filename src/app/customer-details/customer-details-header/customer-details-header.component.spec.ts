import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailsHeaderComponent } from './customer-details-header.component';

describe('CustomerDetailsHeaderComponent', () => {
  let component: CustomerDetailsHeaderComponent;
  let fixture: ComponentFixture<CustomerDetailsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDetailsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
