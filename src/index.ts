import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RbDashboardComponent } from './rb-dashboard.component';
import { RbDashboardComponentRouting } from './rb-dashboard.routing';

export * from './rb-dashboard.component';
export * from './rb-dashboard.routing';

@NgModule({
  imports: [
    CommonModule,
    RbDashboardComponentRouting
  ],
  declarations: [
    RbDashboardComponent
  ],
  exports: [
    RbDashboardComponent
  ]
})
export class RbDashboardComponentModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RbDashboardComponentModule,
      providers: []
    };
  }
}
