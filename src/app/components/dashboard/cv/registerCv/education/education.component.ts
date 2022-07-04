import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

interface Department {
  name: string;
}

interface City {
  name: string;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class EducationComponent implements OnInit {
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  cityControl = new FormControl<City | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  cities: City[] = [{ name: '-' }, { name: '-' }];

  departmentControl = new FormControl<Department | null>(
    null,
    Validators.required
  );
  selectDepartmentFormControl = new FormControl('', Validators.required);
  departments: Department[] = [{ name: '-' }, { name: '-' }];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
