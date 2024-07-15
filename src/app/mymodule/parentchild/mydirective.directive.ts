import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[my-directive]',
})
export class MyDirective implements OnInit {
  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private render: Renderer2
  ) {}
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') hoverFunction() {
    this.elementRef.nativeElement.style.backgroundColor = 'blue';
  }
}
