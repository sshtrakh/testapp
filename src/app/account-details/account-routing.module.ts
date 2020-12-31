import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {AccountDetailsComponent} from './account-details.component';
import {GridComponent} from '../grid/grid.component';
import {CustomerDetailsHeaderComponent} from '../customer-details/customer-details-header/customer-details-header.component';
import {CustomerDetailsTodoListComponent} from '../customer-details/customer-details-todo-list/customer-details-todo-list.component';
import {CustomerDetailsSuggestionsComponent} from '../customer-details/customer-details-suggestions/customer-details-suggestions.component';
import {CustomerDetailsContactsComponent} from '../customer-details/customer-details-contacts/customer-details-contacts.component';
import {AccountDetailsLegalInfoComponent} from './account-details-legal-info/account-details-legal-info.component';
import {AccountDetailsTransactionHistoryComponent} from './account-details-transaction-history/account-details-transaction-history.component';
import {AccountDetailsSettingsComponent} from './account-details-settings/account-details-settings.component';
import {AccountDetailsSupportComponent} from './account-details-support/account-details-support.component';

const routes: Routes = [{
  path: '', component: GridComponent,
  children: [{path: '', outlet: 'header', component: AccountDetailsLegalInfoComponent}, {
    path: '',
    outlet: 'left',
    component: AccountDetailsTransactionHistoryComponent
  },
    {path: '', outlet: 'right', component: AccountDetailsSettingsComponent}, {
      path: '',
      outlet: 'footer',
      component: AccountDetailsSupportComponent
    }]
}];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
