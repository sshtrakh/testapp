import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailsSettingsComponent } from './account-details-settings.component';

describe('AccountDetailsSettingsComponent', () => {
  let component: AccountDetailsSettingsComponent;
  let fixture: ComponentFixture<AccountDetailsSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountDetailsSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDetailsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
