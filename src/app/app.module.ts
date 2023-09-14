import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { FundComponent } from './components/main/fund/fund.component';
import { SchemeComponent } from './components/main/scheme/scheme.component';
import { DetailsComponent } from './common-components/details/details.component';
import { AddFundComponent } from './components/add-fund/add-fund.component';
import { AddSchemeComponent } from './components/add-scheme/add-scheme.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    FundComponent,
    SchemeComponent,
    DetailsComponent,
    AddFundComponent,
    AddSchemeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
