import {Directive, HostBinding, HostListener, Input} from '@angular/core';

const DEFAULT_BACKGROUND = '#e8acd9';
const HOVER_BACKGROUND = '#ce3783';
const DISABLED_BACKGROUND = 'rgba(156,129,150,0.57)';

@Directive()
export class ButtonBaseDirective {

  @HostBinding('style.background-color')
  backgroundColor = DEFAULT_BACKGROUND;

  @HostBinding('style.border-radius')
  borderRadius = '4px';

  @HostBinding('style.border')
  border = 'none';

  _disabled = false;
  @Input()
  @HostBinding('disabled')
  set disabled(val) {
    this._disabled = val;
    this.backgroundColor = val ? DISABLED_BACKGROUND : DEFAULT_BACKGROUND;
  }

  get disabled(): boolean {
    return this._disabled;
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.hover(HOVER_BACKGROUND);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.hover(DEFAULT_BACKGROUND);
  }

  private hover(color: string): void {
    this.backgroundColor = color;
  }

}
