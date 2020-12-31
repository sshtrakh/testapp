import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDetailsComponent } from './account-details.component';
import {AccountRoutingModule} from './account-routing.module';
import { AccountDetailsLegalInfoComponent } from './account-details-legal-info/account-details-legal-info.component';
import { AccountDetailsSupportComponent } from './account-details-support/account-details-support.component';
import { AccountDetailsTransactionHistoryComponent } from './account-details-transaction-history/account-details-transaction-history.component';
import { AccountDetailsSettingsComponent } from './account-details-settings/account-details-settings.component';



@NgModule({
  declarations: [AccountDetailsComponent, AccountDetailsLegalInfoComponent, AccountDetailsSupportComponent, AccountDetailsTransactionHistoryComponent, AccountDetailsSettingsComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
  ]
})
export class AccountDetailsModule { }
