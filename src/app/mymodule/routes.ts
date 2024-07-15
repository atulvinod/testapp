import { Route, Routes } from '@angular/router';
import { MyComponent } from './mycomponent';
import { MyForm } from './forms/template-form/templateform.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactiveform.component';
import { TodoAppRoot } from './todo/root/root.component';
import { ResolverTestComponent } from './todo/resolverTest/resolver-test.component';
import { MyDataResolver } from './mydata.resolver';
import { NgrxTodoListComponent } from './rgrx-todo/rgrx-todo.component';

export const routes: Route[] = [
  {
    path: '',
    component: MyComponent,
  },
  {
    path: 'template',
    component: MyForm,
  },
  {
    path: 'reactive',
    component: ReactiveFormComponent,
    data: {
      name: 'passed by route',
    },
  },
  {
    path: 'todo/:id',
    component: TodoAppRoot,
    pathMatch: 'prefix',
  },
  {
    path: 'resolver',
    component: ResolverTestComponent,
    resolve: {
      resolvedData: MyDataResolver
    }
  }, {
    path: 'ngrx-todo',
    component: NgrxTodoListComponent
  }
];
