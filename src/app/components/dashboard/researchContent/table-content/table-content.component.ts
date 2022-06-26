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
  score: number;
  feedback: string;
}

const ELEMENT_DATA: project[] = [
  {
    position: 1,
    name: 'Investigacion de Grillos',
    status: 'pendiente',
    score: 0,
    feedback: '',
  },
  { position: 2, name: 'Helium', status: 'pendiente', score: 0, feedback: '-' },
  {
    position: 3,
    name: 'Lithium',
    status: 'calificada con arreglos',
    score: 4,
    feedback: 'ver',
  },
  {
    position: 4,
    name: 'Beryllium',
    status: 'pendiente',
    score: 0,
    feedback: '-',
  },
  {
    position: 5,
    name: 'Boron',
    status: 'calificada',
    score: 3.7,
    feedback: 'ver',
  },
];

@Component({
  selector: 'app-table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class TableContentComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'name',
    'status',
    'score',
    'feedback',
  ];
  dataSource = ELEMENT_DATA;

  itemsControl = new FormControl<Items | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  items: Items[] = [{ name: 'Titulo' }, { name: 'Estado' }];

  constructor() {}

  ngOnInit(): void {}
}
