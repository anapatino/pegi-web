import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Evaluator {
  name: string;
  position: number;
  availability: string;
}

const ELEMENT_DATA: Evaluator[] = [
  {
    position: 1,
    name: 'Eydy Suarez',
    availability: 'Disponible',
  },
  {
    position: 2,
    name: 'Helium',
    availability: 'Ocupada',
  },
  {
    position: 3,
    name: 'Lithium',
    availability: 'Disponible',
  },
];

@Component({
  selector: 'app-search-evaluators',
  templateUrl: './search-evaluators.component.html',
  styleUrls: ['./search-evaluators.component.scss'],
})
export class SearchEvaluatorsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'availability'];
  dataSource = ELEMENT_DATA;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  updateEvaluators(): void {
    this.router.navigate(['/dashboard/registerEvaluators']);
  }
}
