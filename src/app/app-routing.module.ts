import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundComponent } from './components/main/fund/fund.component';
import { SchemeComponent } from './components/main/scheme/scheme.component';
import { AddFundComponent } from './components/add-fund/add-fund.component';

const routes: Routes = [
  { path: 'fund', component: FundComponent },
  { path: 'scheme', component: SchemeComponent },
  { path: 'add-fund', component: AddFundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
