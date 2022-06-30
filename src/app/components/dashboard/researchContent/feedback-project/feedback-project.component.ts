import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Router } from '@angular/router';

interface Items {
  name: string;
}

@Component({
  selector: 'app-feedback-project',
  templateUrl: './feedback-project.component.html',
  styleUrls: ['./feedback-project.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class FeedbackProjectComponent implements OnInit {
  itemsControl = new FormControl<Items | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  items: Items[] = [{ name: 'Aprobada' }, { name: 'Rechazada' }];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  viewTableProject(): void {
    this.router.navigate(['/dashboard/searchProject/tableEvaluatorsProject']);
  }
}
