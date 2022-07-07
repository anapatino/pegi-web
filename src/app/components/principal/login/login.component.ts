import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { emptyCreateLogin, Login } from './models/auth';
import { AuthService } from './services/auth.service';
import { catchError, of } from 'rxjs';

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

  login: Login = { ...emptyCreateLogin };

  userNameControl = new FormControl<string>(
    this.login.name,
    Validators.required
  );

  userPasswordControl = new FormControl<string>(
    this.login.password,
    Validators.required
  );

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  verifyUser(): void {
    this.authService.login(this.login).subscribe(
      (resp) => {
        if (!resp.hasErrors) this.router.navigate(['/dashboard']);
        alert(resp.message);
      },
      (error) => alert(error.error.message)
    );
  }

  principal(): void {
    this.router.navigate(['/principal']);
  }
}
