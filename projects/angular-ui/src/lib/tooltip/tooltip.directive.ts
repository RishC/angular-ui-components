import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[auTooltip]'
})
export class TooltipDirective {

  constructor() { }
  @HostListener('click') toggle() {
    console.log('here');
  }
}
