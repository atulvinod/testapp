import { createSelector } from "@ngrx/store";
import { AppState, TodoState } from "./interfaces";

export const selectTodoState = ( state: AppState ) => state.todos;

export const selectAllTodos = createSelector(
  selectTodoState,
  ( state: TodoState ) => state.todos
);

export const selectTodosLoading = createSelector(
  selectTodoState,
  ( state: TodoState ) => state.loading
);

export const selectTodosError = createSelector(
  selectTodoState,
  ( state: TodoState ) => state.error
)