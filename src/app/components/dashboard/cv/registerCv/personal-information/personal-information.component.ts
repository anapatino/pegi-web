import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

interface Civil {
  name: string;
}

interface Sex {
  name: string;
}

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class PersonalInformationComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  civilControl = new FormControl<Civil | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  civils: Civil[] = [
    { name: 'Soltero/a' },
    { name: 'Casado/a' },
    { name: 'Viudo/a' },
    { name: 'Union Libre' },
  ];

  sexControl = new FormControl<Sex | null>(null, Validators.required);
  selecFormControl = new FormControl('', Validators.required);
  sexs: Sex[] = [
    { name: 'Femenino' },
    { name: 'Masculino' },
    { name: 'Sin Especificar' },
  ];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
