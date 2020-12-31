import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountRoutingModule} from './account-routing.module';
import {AccountDetailsLegalInfoComponent} from './account-details-legal-info/account-details-legal-info.component';
import {AccountDetailsSupportComponent} from './account-details-support/account-details-support.component';
import {AccountDetailsTransactionHistoryComponent} from './account-details-transaction-history/account-details-transaction-history.component';
import {AccountDetailsSettingsComponent} from './account-details-settings/account-details-settings.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [AccountDetailsLegalInfoComponent, AccountDetailsSupportComponent, AccountDetailsTransactionHistoryComponent, AccountDetailsSettingsComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatTableModule,
  ]
})
export class AccountDetailsModule {
}
