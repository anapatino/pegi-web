import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterCvComponent } from './components/dashboard/cv/register-cv/register-cv.component';
import { SearchCvComponent } from './components/dashboard/cv/search-cv/search-cv.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { LoginComponent } from './components/principal/login/login.component';
import { PrincipalComponent } from './components/principal/principal/principal.component';

const routes: Routes = [
  { path: '', redirectTo: 'principal', pathMatch: 'full' },
  { path: 'principal', component: PrincipalComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'registerCv', component: RegisterCvComponent },
      { path: 'searchCv', component: SearchCvComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
