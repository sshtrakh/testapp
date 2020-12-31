import {Directive, HostBinding} from '@angular/core';
import {ButtonBaseDirective} from './button-base.directive';

@Directive({
  selector: '[appLargeButton]'
})
export class LargeButtonDirective extends ButtonBaseDirective {

  @HostBinding('style.height')
  height = '40px';

  @HostBinding('style.width')
  width = '140px';

  constructor() {
    super();
  }

}
