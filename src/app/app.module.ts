import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal/principal.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { LoginComponent } from './components/principal/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterCvComponent } from './components/dashboard/cv/registerCv/register-cv/register-cv.component';
import { SearchCvComponent } from './components/dashboard/cv/search-cv/search-cv.component';
import { RegisterProposalComponent } from './components/dashboard/proposal/registerProposal/register-proposal/register-proposal.component';
import { SearchProposalComponent } from './components/dashboard/proposal/search-proposal/search-proposal.component';
import { PersonalInformationComponent } from './components/dashboard/cv/registerCv/personal-information/personal-information.component';
import { EducationComponent } from './components/dashboard/cv/registerCv/education/education.component';
import { AdditionalEducationComponent } from './components/dashboard/cv/registerCv/additional-education/additional-education.component';
import { GeneralInformationComponent } from './components/dashboard/proposal/registerProposal/general-information/general-information.component';
import { SpecificInformationComponent } from './components/dashboard/proposal/registerProposal/specific-information/specific-information.component';
import { ApproachComponent } from './components/dashboard/proposal/registerProposal/approach/approach.component';
import { JustificationComponent } from './components/dashboard/proposal/registerProposal/justification/justification.component';
import { ObjectivesComponent } from './components/dashboard/proposal/registerProposal/objectives/objectives.component';
import { BibliographyComponent } from './components/dashboard/proposal/registerProposal/bibliography/bibliography.component';
import { RegisterProjectComponent } from './components/dashboard/project/registerProject/register-project/register-project.component';
import { SearchProjectComponent } from './components/dashboard/project/searchProject/search-project/search-project.component';
import { SearchAssessorComponent } from './components/dashboard/assessor/search-assessor/search-assessor.component';
import { SearchLinesComponent } from './components/dashboard/lines/search-lines/search-lines.component';
import { HomePageComponent } from './components/dashboard/home-page/home-page.component';
import { TableContentComponent } from './components/dashboard/researchContent/students/table-content/table-content.component';
import { FeedbackComponent } from './components/dashboard/researchContent/feedback/feedback.component';
import { RegisterLinesComponent } from './components/dashboard/lines/registerLines/register-lines/register-lines.component';
import { RegisterAssessorComponent } from './components/dashboard/assessor/register-assessor/register-assessor.component';
import { RegisterEvaluatorsComponent } from './components/dashboard/evaluators/register-evaluators/register-evaluators.component';
import { SearchEvaluatorsComponent } from './components/dashboard/evaluators/search-evaluators/search-evaluators.component';
import { SearchProposalEvaluatorsComponent } from './components/dashboard/proposal/search-proposal-evaluators/search-proposal-evaluators.component';
import { TableContentEvaluatorsComponent } from './components/dashboard/researchContent/evaluators/table-content-evaluators/table-content-evaluators.component';
import { TableContentProjectComponent } from './components/dashboard/researchContent/students/table-content-project/table-content-project.component';
import { TableContentEvaluatorsProjectComponent } from './components/dashboard/researchContent/evaluators/table-content-evaluators-project/table-content-evaluators-project.component';
import { FeedbackProjectComponent } from './components/dashboard/researchContent/feedback-project/feedback-project.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    DashboardComponent,
    LoginComponent,
    RegisterCvComponent,
    SearchCvComponent,
    RegisterProposalComponent,
    SearchProposalComponent,
    PersonalInformationComponent,
    EducationComponent,
    AdditionalEducationComponent,
    GeneralInformationComponent,
    SpecificInformationComponent,
    ApproachComponent,
    JustificationComponent,
    ObjectivesComponent,
    BibliographyComponent,
    RegisterProjectComponent,
    SearchProjectComponent,
    SearchAssessorComponent,
    SearchLinesComponent,
    HomePageComponent,
    TableContentComponent,
    FeedbackComponent,
    RegisterLinesComponent,
    RegisterAssessorComponent,
    RegisterEvaluatorsComponent,
    SearchEvaluatorsComponent,
    SearchProposalEvaluatorsComponent,
    TableContentEvaluatorsComponent,
    TableContentProjectComponent,
    TableContentEvaluatorsProjectComponent,
    FeedbackProjectComponent,
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
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [MatNativeDateModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
