import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
    {{ message }}
    <p *ngIf="message.length != 0">This is the projected message:</p>
    <p my-directive><ng-content #content> </ng-content></p>
    <button (click)="emitTheEvent()">press to emit</button>
  `,
})
export class MessageComponent implements AfterContentInit {
  @Input('message') message: string = ''; // Receive message from parent component
  @ContentChild( 'appRef' ) appRef!: ElementRef<HTMLDivElement>;
  @Output() eventE = new EventEmitter<{ [id: string]: string }>();
  displayMessage(message: string) {
    this.message = message; // Update displayed message
  }
  ngAfterContentInit(): void {}

  emitTheEvent() {
    this.eventE.emit({ id: Math.random().toString() });
  }
}
