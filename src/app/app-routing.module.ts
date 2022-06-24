import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchAssessorComponent } from './components/dashboard/assessor/search-assessor/search-assessor.component';
import { RegisterCvComponent } from './components/dashboard/cv/registerCv/register-cv/register-cv.component';
import { SearchCvComponent } from './components/dashboard/cv/search-cv/search-cv.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { HomePageComponent } from './components/dashboard/home-page/home-page.component';
import { SearchLinesComponent } from './components/dashboard/lines/search-lines/search-lines.component';
import { RegisterProjectComponent } from './components/dashboard/project/registerProject/register-project/register-project.component';
import { SearchProjectComponent } from './components/dashboard/project/searchProject/search-project/search-project.component';
import { RegisterProposalComponent } from './components/dashboard/proposal/registerProposal/register-proposal/register-proposal.component';
import { SearchProposalComponent } from './components/dashboard/proposal/search-proposal/search-proposal.component';
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
      { path: '', redirectTo: 'homePage', pathMatch: 'full' },
      { path: 'homePage', component: HomePageComponent },
      { path: 'registerCv', component: RegisterCvComponent },
      { path: 'searchCv', component: SearchCvComponent },
      { path: 'registerProposal', component: RegisterProposalComponent },
      { path: 'searchProposal', component: SearchProposalComponent },
      { path: 'registerProject', component: RegisterProjectComponent },
      { path: 'searchProject', component: SearchProjectComponent },
      { path: 'searchAssesor', component: SearchAssessorComponent },
      { path: 'searchLines', component: SearchLinesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
