import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Router } from '@angular/router';

interface Items {
  name: string;
}

export interface project {
  name: string;
  position: number;
  status: string;
  score: number;
  view: string;
  feedback: string;
}

const ELEMENT_DATA: project[] = [
  {
    position: 1,
    name: 'Investigacion de Grillos',
    status: 'pendiente',
    score: 0,
    view: 'grip-vertical',
    feedback: 'archive',
  },
  {
    position: 2,
    name: 'Helium',
    status: 'pendiente',
    score: 0,
    view: 'grip-vertical',
    feedback: 'archive',
  },
  {
    position: 3,
    name: 'Lithium',
    status: 'calificada con arreglos',
    score: 0,
    view: 'grip-vertical',
    feedback: 'archive',
  },
  {
    position: 4,
    name: 'Beryllium',
    status: 'pendiente',
    score: 0,
    view: 'grip-vertical',
    feedback: 'archive',
  },
  {
    position: 5,
    name: 'Boron',
    status: 'calificada',
    score: 0,
    view: 'grip-vertical',
    feedback: 'archive',
  },
];

@Component({
  selector: 'app-table-content-project',
  templateUrl: './table-content-project.component.html',
  styleUrls: ['./table-content-project.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class TableContentProjectComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'name',
    'status',
    'score',
    'view',
    'feedback',
  ];
  dataSource = ELEMENT_DATA;

  itemsControl = new FormControl<Items | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  items: Items[] = [{ name: 'Titulo' }, { name: 'Estado' }];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  viewInformationProject(): void {
    this.router.navigate(['/dashboard/searchProject/registerProject']);
  }

  viewFeedbackProject(): void {
    this.router.navigate([
      '/dashboard/researchContent/feedback/feedbackProject',
    ]);
  }
}
