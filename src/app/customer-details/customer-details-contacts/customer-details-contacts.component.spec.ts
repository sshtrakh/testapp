import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailsContactsComponent } from './customer-details-contacts.component';

describe('CustomerDetailsContactsComponent', () => {
  let component: CustomerDetailsContactsComponent;
  let fixture: ComponentFixture<CustomerDetailsContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDetailsContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailsContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
