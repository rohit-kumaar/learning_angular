import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundComponent } from './components/main/fund/fund.component';
import { SchemeComponent } from './components/main/scheme/scheme.component';
import { AddFundComponent } from './components/add-fund/add-fund.component';
import { AddSchemeComponent } from './components/add-scheme/add-scheme.component';
import { DetailsComponent } from './common-components/details/details.component';

const routes: Routes = [
  { path: '', component: FundComponent },
  { path: 'scheme', component: SchemeComponent },
  { path: 'scheme/add-scheme', component: AddSchemeComponent },
  { path: 'scheme/add-scheme/details', component: DetailsComponent },

  { path: 'add-fund', component: AddFundComponent },
  { path: 'add-fund/details', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
