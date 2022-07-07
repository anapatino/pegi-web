import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CreateSubLine, SubLineResponse } from '../../models/subline';
import { CreateLine, emptyLine, LineResponse } from '../../models/line';
import { LinesService } from '../../../services/lines.service';

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
  lines: LineResponse[] = [];
  line: CreateLine = { ...emptyLine };

  linesControl = new FormControl<CreateLine>(null, Validators.required);
  subLinesControl = new FormControl<CreateSubLine>(null, Validators.required);

  subLines: SubLineResponse[] = [];

  linesFormGroup = this._formBuilder.group({
    linesCtrl: ['', Validators.required],
  });

  subLinesFormGroup = this._formBuilder.group({
    subLinesCtrl: ['', Validators.required],
  });

  areasFormGroup = this._formBuilder.group({
    areasCtrl: ['', Validators.required],
  });

  constructor(
    private _formBuilder: FormBuilder,
    private linesService: LinesService
  ) {}

  ngOnInit(): void {}

  saveLine() {
    this.linesService.saveLine(this.line);
  }
}
