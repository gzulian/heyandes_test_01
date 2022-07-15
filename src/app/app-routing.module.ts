import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailComponent } from './companies/detail/detail.component';
import { ListDashboardComponent } from './companies/list-dashboard/list-dashboard.component';

const routes: Routes = [
  {path : '', component : ListDashboardComponent},
  {path : 'detail', component : DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



/*

  <app-indicators-dashboard></app-indicators-dashboard>
          <br/>
          <br/>
          <app-list-dashboard></app-list-dashboard>
 */