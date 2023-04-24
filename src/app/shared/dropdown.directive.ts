import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
  }
  @HostBinding('class.open') isOpen = false;

  @HostListener('click')
  toggleOpen(eventData: Event) {
    this.isOpen = !this.isOpen;
    }


}
