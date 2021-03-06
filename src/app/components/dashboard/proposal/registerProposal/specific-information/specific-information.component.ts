import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

interface Lines {
  name: string;
}

interface SubLines {
  name: string;
}

interface Areas {
  name: string;
}

@Component({
  selector: 'app-specific-information',
  templateUrl: './specific-information.component.html',
  styleUrls: ['./specific-information.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class SpecificInformationComponent implements OnInit {
  specificInformationFormGroup = this._formBuilder.group({
    specifiCtrl: ['', Validators.required],
  });

  linesControl = new FormControl<Lines | null>(null, Validators.required);
  selectLinesFormControl = new FormControl('', Validators.required);
  lines: Lines[] = [{ name: '--' }, { name: '--' }, { name: '--' }];

  subLinesControl = new FormControl<SubLines | null>(null, Validators.required);
  selectSubLinesFormControl = new FormControl('', Validators.required);
  subLines: SubLines[] = [{ name: '--' }, { name: '--' }, { name: '--' }];

  areasControl = new FormControl<Areas | null>(null, Validators.required);
  selectAreasFormControl = new FormControl('', Validators.required);
  areas: Areas[] = [{ name: '--' }, { name: '--' }, { name: '--' }];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
