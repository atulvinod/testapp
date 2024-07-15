import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as TodoActions from './actions';
import { TodoService } from './service';

@Injectable()
export class TodoEffects {
  loadTodos$ = createEffect( () =>
    this.actions$.pipe(
      // the type of action that an effect should listen to is 
      // defined by ofType operator
      ofType( TodoActions.loadTodos ),
      mergeMap( () => this.todoService.getTodos()
        .pipe(
          map( todos => TodoActions.loadTodosSuccess( { todos } ) ),
          catchError( error => of( TodoActions.loadTodosFailure( { error: error.message } ) ) )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) { }
}