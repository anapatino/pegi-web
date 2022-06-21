import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal/principal.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { LoginComponent } from './components/principal/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterCvComponent } from './components/dashboard/cv/register-cv/register-cv.component';
import { SearchCvComponent } from './components/dashboard/cv/search-cv/search-cv.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    DashboardComponent,
    LoginComponent,
    RegisterCvComponent,
    SearchCvComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
