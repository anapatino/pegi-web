import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-register-proposal',
  templateUrl: './register-proposal.component.html',
  styleUrls: ['./register-proposal.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class RegisterProposalComponent implements OnInit {
  generalInformationFormGroup = this._formBuilder.group({
    generalCtrl: ['', Validators.required],
  });
  specificInformationFormGroup = this._formBuilder.group({
    specifiCtrl: ['', Validators.required],
  });
  problemStatementFormGroup = this._formBuilder.group({
    problemCtrl: ['', Validators.required],
  });
  justificationFormGroup = this._formBuilder.group({
    justificationCtrl: ['', Validators.required],
  });
  objectivesFormGroup = this._formBuilder.group({
    objectivesCtrl: ['', Validators.required],
  });
  bibliographyFormGroup = this._formBuilder.group({
    bibliographyCtrl: ['', Validators.required],
  });
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
