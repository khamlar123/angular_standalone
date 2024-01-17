import { Routes } from '@angular/router';
import { DashbordComponent } from './dashbord.component';
import { DashbordListComponent } from './compoments/dashbord-list/dashbord-list.component';

export const DASHBORD_ROUTES: Routes = [
  {
    path: '',
    component: DashbordComponent,
    children: [
      {
        path: '',
        redirectTo: 'dasbord-list',
        pathMatch: 'full',
      },
      {
        path: 'dasbord-list',
        component: DashbordListComponent,
      },
    ],
  },
];
