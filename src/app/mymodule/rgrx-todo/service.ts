import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Todo } from "./interfaces";

@Injectable( {
  providedIn: 'root'
} )
export class TodoService {
  getTodos(): Observable<Todo[]> {
    return of( [] )
  }
}