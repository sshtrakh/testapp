import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsRoutingModule } from './buttons-routing.module';
import { ButtonsComponent } from './buttons.component';
import { SmallButtonDirective } from './small-button.directive';
import { MediumButtonDirective } from './medium-button.directive';
import { LargeButtonDirective } from './large-button.directive';


@NgModule({
  declarations: [ButtonsComponent, SmallButtonDirective, MediumButtonDirective, LargeButtonDirective],
  imports: [
    CommonModule,
    ButtonsRoutingModule
  ]
})
export class ButtonsModule { }
