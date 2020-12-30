import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicFormComponent} from '../basic-form/basic-form.component';
import {ButtonsModule} from './buttons.module';
import {ButtonsComponent} from './buttons.component';

const routes: Routes = [{
  path: '', component: ButtonsComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonsRoutingModule { }
