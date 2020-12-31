import {Directive, HostBinding} from '@angular/core';
import {ButtonBaseDirective} from './button-base.directive';


@Directive({
  selector: 'button[appSmallButton]',
})
export class SmallButtonDirective extends ButtonBaseDirective {

  @HostBinding('style.height')
  height = '20px';

  @HostBinding('style.width')
  width = '100px';

  constructor() {
    super();
  }
}

