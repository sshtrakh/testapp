import {Directive, HostBinding} from '@angular/core';
import {ButtonBaseDirective} from './button-base.directive';

@Directive({
  selector: 'button[appMediumButton]'
})
export class MediumButtonDirective extends ButtonBaseDirective {

  @HostBinding('style.height')
  height = '30px';

  @HostBinding('style.width')
  width = '120px';

  constructor() {
    super();
  }
}
