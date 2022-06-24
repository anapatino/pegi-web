import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

export interface assesors {
  name: string;
  position: number;
}

interface Lines {
  name: string;
}

const ELEMENT_DATA: assesors[] = [
  {
    position: 1,
    name: 'Tecnologías de la Información y la comunicación',
  },
  {
    position: 2,
    name: 'TRANSFORMACION DIGITAL',
  },
];

@Component({
  selector: 'app-search-lines',
  templateUrl: './search-lines.component.html',
  styleUrls: ['./search-lines.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class SearchLinesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name'];
  dataSource = ELEMENT_DATA;

  linesControl = new FormControl<Lines | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  lines: Lines[] = [
    { name: 'Lineas de investigacion' },
    { name: 'Sublineas de investigacion' },
    { name: 'Areas Tematicas' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
