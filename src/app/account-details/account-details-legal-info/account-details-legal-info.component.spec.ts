import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailsLegalInfoComponent } from './account-details-legal-info.component';

describe('AccountDetailsLegalInfoComponent', () => {
  let component: AccountDetailsLegalInfoComponent;
  let fixture: ComponentFixture<AccountDetailsLegalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountDetailsLegalInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDetailsLegalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
