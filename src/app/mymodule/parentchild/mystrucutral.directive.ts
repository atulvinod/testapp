import {
  Directive,
  ViewContainerRef,
  ElementRef,
  Input,
  TemplateRef,
} from '@angular/core';
@Directive({
  selector: '[show]',
})
export class MyStructuralDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input() set show(condition: boolean) {
    console.log(condition);
    if (condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
