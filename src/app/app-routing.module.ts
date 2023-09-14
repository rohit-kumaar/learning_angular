import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FundComponent } from './components/main/fund/fund.component';
import { SchemeComponent } from './components/main/scheme/scheme.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: 'fund', component: FundComponent },
  { path: 'scheme', component: SchemeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
