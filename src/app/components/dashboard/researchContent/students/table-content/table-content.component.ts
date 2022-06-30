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
  view: string;
  feedback: string;
}

const ELEMENT_DATA: project[] = [
  {
    position: 1,
    name: 'Investigacion de Grillos',
    status: 'pendiente',
    view: 'grip-vertical',
    feedback: 'archive',
  },
  {
    position: 2,
    name: 'Helium',
    status: 'pendiente',
    view: 'grip-vertical',
    feedback: 'archive',
  },
  {
    position: 3,
    name: 'Lithium',
    status: 'calificada con arreglos',
    view: 'grip-vertical',
    feedback: 'archive',
  },
  {
    position: 4,
    name: 'Beryllium',
    status: 'pendiente',
    view: 'grip-vertical',
    feedback: 'archive',
  },
  {
    position: 5,
    name: 'Boron',
    status: 'calificada',
    view: 'grip-vertical',
    feedback: 'archive',
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
    'view',
    'feedback',
  ];
  dataSource = ELEMENT_DATA;

  itemsControl = new FormControl<Items | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  items: Items[] = [{ name: 'Titulo' }, { name: 'Estado' }];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  viewInformation(): void {
    /*-->validar en que componente padre estoy<---
    this.router.navigate(['/dashboard/searchProposal/registerProposal']);
    this.router.navigate(['/dashboard/searchProject/registerProject']);*/
  }

  viewFeedback(): void {
    /*-->validar en que componente padre estoy<---
    this.router.navigate(['/dashboard/searchProposal/feedback']);
     this.router.navigate(['/dashboard/searchProject/feedback']);
    */
  }
}
