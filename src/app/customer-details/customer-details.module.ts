import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailsComponent } from './customer-details.component';
import {CustomerRoutingModule} from './customer-routing.module';
import {GridModule} from '../grid/grid.module';
import { CustomerDetailsHeaderComponent } from './customer-details-header/customer-details-header.component';
import { CustomerDetailsContactsComponent } from './customer-details-contacts/customer-details-contacts.component';
import { CustomerDetailsTodoListComponent } from './customer-details-todo-list/customer-details-todo-list.component';
import { CustomerDetailsSuggestionsComponent } from './customer-details-suggestions/customer-details-suggestions.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [CustomerDetailsComponent, CustomerDetailsHeaderComponent, CustomerDetailsContactsComponent, CustomerDetailsTodoListComponent, CustomerDetailsSuggestionsComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    GridModule,
    MatCheckboxModule,
    MatListModule,
  ]
})
export class CustomerDetailsModule { }
