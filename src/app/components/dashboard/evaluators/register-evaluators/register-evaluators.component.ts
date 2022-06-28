import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

interface Evaluator {
  name: string;
}

interface Available {
  name: string;
}

@Component({
  selector: 'app-register-evaluators',
  templateUrl: './register-evaluators.component.html',
  styleUrls: ['./register-evaluators.component.scss'],
})
export class RegisterEvaluatorsComponent implements OnInit {
  evaluatorsControl = new FormControl<Evaluator | null>(
    null,
    Validators.required
  );
  selectFormControl = new FormControl('', Validators.required);
  evaluators: Evaluator[] = [{ name: '--' }, { name: '--' }, { name: '--' }];

  availableControl = new FormControl<Available | null>(
    null,
    Validators.required
  );
  selectAvailableFormControl = new FormControl('', Validators.required);
  availables: Available[] = [{ name: 'Disponible' }, { name: 'Ocupado' }];

  registerEvaluatorFormGroup = this._formBuilder.group({
    evaluatorCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
