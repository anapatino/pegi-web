import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal/principal.component';
import { LoguinComponent } from './components/principal/loguin/loguin.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, PrincipalComponent, LoguinComponent, DashboardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
