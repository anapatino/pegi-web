import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

interface Asessors {
  name: string;
}

interface Available {
  name: string;
}

@Component({
  selector: 'app-register-assessor',
  templateUrl: './register-assessor.component.html',
  styleUrls: ['./register-assessor.component.scss'],
})
export class RegisterAssessorComponent implements OnInit {
  asessorsControl = new FormControl<Asessors | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  asessors: Asessors[] = [{ name: '--' }, { name: '--' }, { name: '--' }];

  availableControl = new FormControl<Available | null>(
    null,
    Validators.required
  );
  selectAvailableFormControl = new FormControl('', Validators.required);
  availables: Available[] = [{ name: 'Disponible' }, { name: 'Ocupado' }];

  registerAssesorFormGroup = this._formBuilder.group({
    asessorCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
