import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailsTodoListComponent } from './customer-details-todo-list.component';

describe('CustomerDetailsTodoListComponent', () => {
  let component: CustomerDetailsTodoListComponent;
  let fixture: ComponentFixture<CustomerDetailsTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDetailsTodoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailsTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
