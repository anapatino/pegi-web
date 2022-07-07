import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

interface ID {
  name: string;
}

interface Program {
  name: string;
}

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class GeneralInformationComponent implements OnInit {
  idControl = new FormControl<ID | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  ids: ID[] = [
    { name: 'Tarjeta de Identidad' },
    { name: 'Cedula de ciudadania' },
    { name: 'Cedula de Extranjeria' },
  ];

  programControl = new FormControl<Program | null>(null, Validators.required);
  selectProgramFormControl = new FormControl('', Validators.required);
  programs: Program[] = [{ name: '-' }, { name: '-' }, { name: '-' }];

  generalInformationFormGroup = this._formBuilder.group({
    generalCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
