import { Directive,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open')myBoolean=false;

  @HostListener('click') clickFunction(){
    this.myBoolean=!this.myBoolean
  }
  constructor() { }

}
