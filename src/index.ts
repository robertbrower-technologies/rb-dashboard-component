import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RbDashboardComponent } from './rb-dashboard.component';

export * from './rb-dashboard.component';

@NgModule({
  imports: [
    CommonModule
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
