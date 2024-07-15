import { ApplicationConfig, isDevMode } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withRouterConfig,
} from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { todoReducer } from './mymodule/rgrx-todo/reducer';

export const appConfig: ApplicationConfig = {
  providers: [ provideRouter( routes ), provideStore( { todos: todoReducer } ), provideEffects(), provideStoreDevtools( { maxAge: 25, logOnly: !isDevMode() } ) ],
};
