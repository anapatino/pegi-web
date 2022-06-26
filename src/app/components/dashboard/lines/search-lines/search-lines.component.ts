import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

export interface assesors {
  name: string;
  position: number;
}

interface Items {
  name: string;
}

interface Lines {
  name: string;
}

interface SubLines {
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

  itemsControl = new FormControl<Items | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  items: Items[] = [
    { name: 'Lineas de investigacion' },
    { name: 'Sublineas de investigacion' },
    { name: 'Areas Tematicas' },
  ];

  linesControl = new FormControl<Items | null>(null, Validators.required);
  selectLinesFormControl = new FormControl('', Validators.required);
  lines: Lines[] = [{ name: '--' }, { name: '--' }, { name: '--' }];

  subLinesControl = new FormControl<Items | null>(null, Validators.required);
  selectSubLinesFormControl = new FormControl('', Validators.required);
  subLines: SubLines[] = [{ name: '--' }, { name: '--' }, { name: '--' }];

  constructor() {}

  ngOnInit(): void {}
}
