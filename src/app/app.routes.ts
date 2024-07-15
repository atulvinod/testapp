import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'mymodule',
    loadChildren: () => import('./mymodule/mymodule').then((m) => m.MyModule),
  },
];
