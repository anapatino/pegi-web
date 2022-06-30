import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

interface Items {
  name: string;
}

export interface project {
  name: string;
  position: number;
  status: string;
  view: string;
  score: string;
}

const ELEMENT_DATA: project[] = [
  {
    position: 1,
    name: 'Investigacion de Grillos',
    status: 'Pendiente',
    view: 'grip-vertical',
    score: 'clipboard-check',
  },
  {
    position: 2,
    name: 'Helium',
    status: 'Pendiente',
    view: 'grip-vertical',
    score: 'clipboard-check',
  },
  {
    position: 3,
    name: 'Lithium',
    status: 'Aprobada',
    view: 'grip-vertical',
    score: 'clipboard-check',
  },
  {
    position: 4,
    name: 'Beryllium',
    status: 'Pendiente',
    view: 'grip-vertical',
    score: 'clipboard-check',
  },
  {
    position: 5,
    name: 'Boron',
    status: 'Aprobada',
    view: 'grip-vertical',
    score: 'clipboard-check',
  },
];

@Component({
  selector: 'app-table-content-evaluators',
  templateUrl: './table-content-evaluators.component.html',
  styleUrls: ['./table-content-evaluators.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class TableContentEvaluatorsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'status', 'view', 'score'];
  dataSource = ELEMENT_DATA;

  itemsControl = new FormControl<Items | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  items: Items[] = [{ name: 'Titulo' }, { name: 'Estado' }];

  constructor() {}

  ngOnInit(): void {}
}
