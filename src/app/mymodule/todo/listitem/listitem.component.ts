import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'todo-list-item',
  templateUrl: './listitem.template.html',
  styleUrl: './listitem.style.scss',
})
export class TodoListItem {
  @Input() content!: string;
  @Input() id!: number;
  @Output() deleteEvent = new EventEmitter<number>();
  constructor() {}

  onDelete() {
    this.deleteEvent.emit(this.id);
  }
}
