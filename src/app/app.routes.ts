import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/dashbord/dashbord.routes').then((r) => r.DASHBORD_ROUTES),
  },
  {
    path: 'peoduct',
    loadChildren: () =>
      import('./pages/product/product.routes').then((r) => r.ProductRouting),
  },
];
