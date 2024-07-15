import { createAction, props } from "@ngrx/store";
import { Todo } from "./interfaces";

export const loadTodos = createAction( '[Todo] load todo' );

export const loadTodosSuccess = createAction(
  `[Todo] load todos success`,
  props<{ todos: Todo[] }>()
)

export const loadTodosFailure = createAction(
  `[Todo] load todos failure`,
  props<{ error: string }>()
)

export const addTodo = createAction(
  '[Todo] Add todo',
  props<{ text: string }>()
)

export const toggleTodo = createAction(
  '[Todo] toggle todo',
  props<{ id: number }>()
)

