import { createReducer, on } from "@ngrx/store";
import { TodoState } from "./interfaces";
import * as TodoActions from './actions';

export const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null
}

export const todoReducer = createReducer(
  initialState,
  on( TodoActions.loadTodos, state => ( { ...state, loading: true } ) ),
  on( TodoActions.loadTodosSuccess, ( state, { todos } ) => ( { ...state, todos, loading: false } ) ),
  on( TodoActions.loadTodosFailure, ( state, { error } ) => ( {
    ...state,
    error,
    loading: false
  } ) ),
  on( TodoActions.addTodo, ( state, { text } ) => ( {
    ...state,
    todos: [ ...state.todos, { id: Date.now(), text, completed: false } ]
  } ) ),
  on( TodoActions.toggleTodo, ( state, { id } ) => ( {
    ...state,
    todos: state.todos.map( todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  } ) ) )