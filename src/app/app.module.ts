import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal/principal.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { LoginComponent } from './components/principal/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterCvComponent } from './components/dashboard/cv/registerCv/register-cv/register-cv.component';
import { SearchCvComponent } from './components/dashboard/cv/search-cv/search-cv.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { RegisterProposalComponent } from './components/dashboard/proposal/registerProposal/register-proposal/register-proposal.component';
import { SearchProposalComponent } from './components/dashboard/proposal/search-proposal/search-proposal.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
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
  ],
  providers: [MatNativeDateModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
