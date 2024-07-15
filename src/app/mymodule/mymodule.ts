import { NgModule } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { MyComponent } from './mycomponent';
import { ParentComponent } from './parentchild/parent.component';
import { MessageComponent } from './parentchild/message.component';
import { CommonModule } from '@angular/common';
import { MyDirective } from './parentchild/mydirective.directive';
import { MyStructuralDirective } from './parentchild/mystrucutral.directive';
import { MyForm } from './forms/template-form/templateform.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactiveform.component';
import { Router, RouterModule } from '@angular/router';
import { routes } from './routes';
import { ModuleRootComponent } from './root.component';
import { MyService } from './services/myservice.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MyInterceptor } from './interceptor';
import { TodoAppRoot } from './todo/root/root.component';
import { TodoListItem } from './todo/listitem/listitem.component';
import { MultiplyByValuePipe } from './pipetest.pipe';
import { ClientDataPipe } from './asyncpipetest.pipe';
import { ResolverTestComponent } from './todo/resolverTest/resolver-test.component';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './rgrx-todo/reducer';
import { EffectsModule, EffectSources } from '@ngrx/effects';
import { TodoEffects } from './rgrx-todo/effects';
import { NgrxTodoListComponent } from './rgrx-todo/rgrx-todo.component';

@NgModule( {
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild( routes ),
  ],
  declarations: [
    MyComponent,
    ParentComponent,
    MessageComponent,
    MyDirective,
    MyStructuralDirective,
    MyForm,
    ReactiveFormComponent,
    ModuleRootComponent,
    TodoAppRoot,
    TodoListItem,
    MultiplyByValuePipe,
    ClientDataPipe,
    ResolverTestComponent,
    NgrxTodoListComponent
    
  ],
  exports: [
    MyComponent,
    MyForm,
    ReactiveFormComponent,
    RouterModule,
    ModuleRootComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true,
    },
  ],
} )
export class MyModule { }
