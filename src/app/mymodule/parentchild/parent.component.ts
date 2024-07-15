import { Component, ContentChild } from '@angular/core';
import { MessageComponent } from './message.component'; // Import child component

@Component({
  selector: 'app-parent',
  template: `
    <h2>Welcome!</h2>
    <p *show="true">
      Enter a message and click the button below to display it in the child
      component.
    </p>
    <app-message [message]="message" (eventE)="getEvent($event)">
      <h1 #appRef>Oye app</h1>
    </app-message>
    <br />
  `,
})
export class ParentComponent {
  message = 'parent se message';
  getEvent(e: { [id: string]: string }) {
    console.log(e['id']);
  }
}
