import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {AccountDetailsComponent} from './account-details.component';

const routes: Routes = [{
  path: '', component: AccountDetailsComponent
}];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
