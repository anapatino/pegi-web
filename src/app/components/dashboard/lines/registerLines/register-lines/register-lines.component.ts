import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

interface Lines {
  name: string;
}

interface SubLines {
  name: string;
}

@Component({
  selector: 'app-register-lines',
  templateUrl: './register-lines.component.html',
  styleUrls: ['./register-lines.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class RegisterLinesComponent implements OnInit {
  linesControl = new FormControl<Lines | null>(null, Validators.required);
  selectLinesFormControl = new FormControl('', Validators.required);
  lines: Lines[] = [{ name: '--' }, { name: '--' }, { name: '--' }];

  subLinesControl = new FormControl<SubLines | null>(null, Validators.required);
  selectSubLinesFormControl = new FormControl('', Validators.required);
  subLines: SubLines[] = [{ name: '--' }, { name: '--' }, { name: '--' }];

  linesFormGroup = this._formBuilder.group({
    linesCtrl: ['', Validators.required],
  });

  subLinesFormGroup = this._formBuilder.group({
    subLinesCtrl: ['', Validators.required],
  });

  areasFormGroup = this._formBuilder.group({
    areasCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
