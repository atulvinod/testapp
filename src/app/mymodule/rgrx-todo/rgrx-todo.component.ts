import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, Todo } from './interfaces';
import * as TodoActions from './actions';
import * as TodoSelectors from './selectors';

@Component( {
  selector: 'app-todo-list',
  template: `
    <div *ngIf="loading$ | async">Loading...</div>
    <ul>
      <li *ngFor="let todo of todos$ | async">
        <input type="checkbox" [checked]="todo.completed" (click)="toggleTodo(todo.id)">
        {{ todo.text }}
      </li>
    </ul>
    <input #todoInput>
    <button (click)="addTodo(todoInput.value)">Add Todo</button>
  `
} )
export class NgrxTodoListComponent implements OnInit {
  todos$: Observable<Todo[]>;
  loading$: Observable<boolean>;

  constructor( private store: Store<AppState> ) {
    this.todos$ = this.store.select( TodoSelectors.selectAllTodos );
    this.loading$ = this.store.select( TodoSelectors.selectTodosLoading );
  }

  ngOnInit() {
    this.store.dispatch( TodoActions.loadTodos() );
  }

  addTodo( text: string ) {
    this.store.dispatch( TodoActions.addTodo( { text } ) );
  }

  toggleTodo( id: number ) {
    this.store.dispatch( TodoActions.toggleTodo( { id } ) );
  }
}