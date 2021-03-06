import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

interface Items {
  name: string;
}

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class FeedbackComponent implements OnInit {
  itemsControl = new FormControl<Items | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  items: Items[] = [{ name: 'Aprobada' }, { name: 'Rechazada' }];

  feedbackFormGroup = this._formBuilder.group({
    feedbackCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
