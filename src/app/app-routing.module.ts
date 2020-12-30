import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'customer-details',
    loadChildren: () => import('./customer-details/customer-details.module').then(m => m.CustomerDetailsModule)
  },
  {
    path: 'account-details',
    loadChildren: () => import('./account-details/account-details.module').then(m => m.AccountDetailsModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./basic-form/basic-form.module').then(m => m.BasicFormModule)
  },
  {
    path: 'buttons',
    loadChildren: () => import('./buttons/buttons.module').then(m => m.ButtonsModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
