import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterAssessorComponent } from './components/dashboard/assessor/register-assessor/register-assessor.component';
import { SearchAssessorComponent } from './components/dashboard/assessor/search-assessor/search-assessor.component';
import { RegisterCvComponent } from './components/dashboard/cv/registerCv/register-cv/register-cv.component';
import { SearchCvComponent } from './components/dashboard/cv/search-cv/search-cv.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { RegisterEvaluatorsComponent } from './components/dashboard/evaluators/register-evaluators/register-evaluators.component';
import { SearchEvaluatorsComponent } from './components/dashboard/evaluators/search-evaluators/search-evaluators.component';
import { HomePageComponent } from './components/dashboard/home-page/home-page.component';
import { RegisterLinesComponent } from './components/dashboard/lines/registerLines/register-lines/register-lines.component';
import { SearchLinesComponent } from './components/dashboard/lines/search-lines/search-lines.component';
import { RegisterProjectComponent } from './components/dashboard/project/registerProject/register-project/register-project.component';
import { SearchProjectComponent } from './components/dashboard/project/searchProject/search-project/search-project.component';
import { RegisterProposalComponent } from './components/dashboard/proposal/registerProposal/register-proposal/register-proposal.component';
import { SearchProposalComponent } from './components/dashboard/proposal/search-proposal/search-proposal.component';
import { FeedbackComponent } from './components/dashboard/researchContent/feedback/feedback.component';
import { TableContentEvaluatorsComponent } from './components/dashboard/researchContent/table-content-evaluators/table-content-evaluators.component';
import { TableContentComponent } from './components/dashboard/researchContent/table-content/table-content.component';
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
      {
        path: 'searchProposal',
        component: SearchProposalComponent,
        children: [
          { path: '', redirectTo: 'table', pathMatch: 'full' },
          { path: 'table', component: TableContentComponent },
          { path: 'feedback', component: FeedbackComponent },
          {
            path: 'tableEvaluators',
            component: TableContentEvaluatorsComponent,
          },
          { path: 'registerProposal', component: RegisterProposalComponent },
        ],
      },
      { path: 'registerProject', component: RegisterProjectComponent },
      {
        path: 'searchProject',
        component: SearchProjectComponent,
        children: [
          { path: '', redirectTo: 'table', pathMatch: 'full' },
          { path: 'table', component: TableContentComponent },
          { path: 'feedback', component: FeedbackComponent },
          {
            path: 'tableEvaluators',
            component: TableContentEvaluatorsComponent,
          },
          { path: 'registerProject', component: RegisterProjectComponent },
        ],
      },
      { path: 'registerAssesor', component: RegisterAssessorComponent },
      { path: 'searchAssesor', component: SearchAssessorComponent },
      { path: 'registerLines', component: RegisterLinesComponent },
      { path: 'searchLines', component: SearchLinesComponent },
      { path: 'registerEvaluators', component: RegisterEvaluatorsComponent },
      { path: 'searchEvaluators', component: SearchEvaluatorsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
