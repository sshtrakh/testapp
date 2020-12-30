import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailsComponent } from './customer-details.component';
import {CustomerRoutingModule} from './customer-routing.module';



@NgModule({
  declarations: [CustomerDetailsComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerDetailsModule { }
