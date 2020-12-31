import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GridComponent} from '../grid/grid.component';
import {AccountDetailsLegalInfoComponent} from './account-details-legal-info/account-details-legal-info.component';
import {AccountDetailsTransactionHistoryComponent} from './account-details-transaction-history/account-details-transaction-history.component';
import {AccountDetailsSettingsComponent} from './account-details-settings/account-details-settings.component';
import {AccountDetailsSupportComponent} from './account-details-support/account-details-support.component';

const routes: Routes = [{
  path: '', component: GridComponent,
  children: [{
    path: '',
    outlet: 'header',
    component: AccountDetailsLegalInfoComponent
  }, {
    path: '',
    outlet: 'left',
    component: AccountDetailsTransactionHistoryComponent
  }, {
    path: '',
    outlet: 'right',
    component: AccountDetailsSettingsComponent
  }, {
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
export class AccountRoutingModule {
}
