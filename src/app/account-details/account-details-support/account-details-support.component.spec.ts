import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailsSupportComponent } from './account-details-support.component';

describe('AccountDetailsSupportComponent', () => {
  let component: AccountDetailsSupportComponent;
  let fixture: ComponentFixture<AccountDetailsSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountDetailsSupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDetailsSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
