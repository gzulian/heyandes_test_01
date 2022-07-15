import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDashboardComponent } from './list-dashboard/list-dashboard.component';
import { IndicatorsDashboardComponent } from './indicators-dashboard/indicators-dashboard.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ListDashboardComponent,
    IndicatorsDashboardComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ListDashboardComponent,
    IndicatorsDashboardComponent,
    DetailComponent
  ]
})
export class CompaniesModule { }
