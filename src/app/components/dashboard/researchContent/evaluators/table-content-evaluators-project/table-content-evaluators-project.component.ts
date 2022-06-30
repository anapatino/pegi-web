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
  qualify: string;
}

const ELEMENT_DATA: project[] = [
  {
    position: 1,
    name: 'Investigacion de Grillos',
    status: 'Pendiente',
    score: 0,
    view: 'grip-vertical',
    qualify: 'clipboard-check',
  },
  {
    position: 2,
    name: 'Helium',
    status: 'Pendiente',
    score: 0,
    view: 'grip-vertical',
    qualify: 'clipboard-check',
  },
  {
    position: 3,
    name: 'Lithium',
    status: 'Aprobada',
    score: 0,
    view: 'grip-vertical',
    qualify: 'clipboard-check',
  },
  {
    position: 4,
    name: 'Beryllium',
    status: 'Pendiente',
    score: 0,
    view: 'grip-vertical',
    qualify: 'clipboard-check',
  },
  {
    position: 5,
    name: 'Boron',
    status: 'Aprobada',
    score: 0,
    view: 'grip-vertical',
    qualify: 'clipboard-check',
  },
];

@Component({
  selector: 'app-table-content-evaluators-project',
  templateUrl: './table-content-evaluators-project.component.html',
  styleUrls: ['./table-content-evaluators-project.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class TableContentEvaluatorsProjectComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'name',
    'status',
    'score',
    'view',
    'qualify',
  ];
  dataSource = ELEMENT_DATA;

  itemsControl = new FormControl<Items | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  items: Items[] = [{ name: 'Titulo' }, { name: 'Estado' }];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  viewInformationProject(): void {
    alert('se ha descargado el archivo');
  }

  viewQualifyProject(): void {
    this.router.navigate(['/dashboard/searchProject/feedbackProject']);
  }
}
