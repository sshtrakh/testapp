import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailsTransactionHistoryComponent } from './account-details-transaction-history.component';

describe('AccountDetailsTransactionHistoryComponent', () => {
  let component: AccountDetailsTransactionHistoryComponent;
  let fixture: ComponentFixture<AccountDetailsTransactionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountDetailsTransactionHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDetailsTransactionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
