import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {GridComponent} from '../grid/grid.component';
import {CustomerDetailsHeaderComponent} from './customer-details-header/customer-details-header.component';
import {CustomerDetailsTodoListComponent} from './customer-details-todo-list/customer-details-todo-list.component';
import {CustomerDetailsSuggestionsComponent} from './customer-details-suggestions/customer-details-suggestions.component';
import {CustomerDetailsContactsComponent} from './customer-details-contacts/customer-details-contacts.component';

const routes: Routes = [{
  path: '', component: GridComponent,
  children: [{path: '', outlet: 'header', component: CustomerDetailsHeaderComponent}, {
    path: '',
    outlet: 'left',
    component: CustomerDetailsTodoListComponent
  },
    {path: '', outlet: 'right', component: CustomerDetailsSuggestionsComponent}, {
      path: '',
      outlet: 'footer',
      component: CustomerDetailsContactsComponent
    }]
}];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}
