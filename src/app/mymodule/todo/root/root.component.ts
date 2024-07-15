import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

class TodoListModel {
  id: number = 0;
  content: string = '';
  constructor(obj: { id: number; content: string }) {
    this.id = obj.id;
    this.content = obj.content;
  }
}

@Component({
  selector: 'todo-app-root',
  templateUrl: './root.template.html',
  styleUrl: './root.style.scss',
})
export class TodoAppRoot implements OnInit {
  todos: TodoListModel[] = [];
  newTodoForm!: FormGroup;

  ngOnInit(): void {
    this.newTodoForm = new FormGroup({
      content: new FormControl(null, [Validators.required]),
    });
  }
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    console.log(activatedRoute.snapshot.params['id']);
    activatedRoute.queryParams.subscribe((q) => {
      console.log(q);
    });
  }

  addTodo() {
    const { content } = this.newTodoForm.value;
    this.todos.push(new TodoListModel({ id: this.todos.length, content }));
    this.newTodoForm.reset();
  }

  deleteTodo(id: number) {
    let filteredTodos = this.todos.filter((t) => t.id != id);
    this.todos = [...filteredTodos];
  }

  nav() {
    this.router.navigate(['reactive'], {
      state: { name: 'atulvinod' },
      relativeTo: this.activatedRoute.parent,
    });
  }
}
