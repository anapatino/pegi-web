import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

interface Roles {
  name: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class LoginComponent implements OnInit {
  hide = true;

  generalInformationFormGroup = this._formBuilder.group({
    generalCtrl: ['', Validators.required],
  });

  rolesControl = new FormControl<Roles | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  roles: Roles[] = [
    { name: 'Estudiante' },
    { name: 'Docente' },
    { name: 'Comite Evaluativo' },
  ];

  constructor(private router: Router, private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  verifyUser(): void {
    this.router.navigate(['/dashboard']);
  }

  principal(): void {
    this.router.navigate(['/principal']);
  }
}
