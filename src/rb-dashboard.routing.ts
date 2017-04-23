import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RbDashboardComponent } from './rb-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: RbDashboardComponent
  },
];
export const RbDashboardComponentRouting: ModuleWithProviders = RouterModule.forChild(routes);