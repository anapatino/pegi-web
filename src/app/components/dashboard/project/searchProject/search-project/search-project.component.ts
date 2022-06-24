import { Component, OnInit } from '@angular/core';

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
  selector: 'app-search-project',
  templateUrl: './search-project.component.html',
  styleUrls: ['./search-project.component.scss'],
})
export class SearchProjectComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'name',
    'status',
    'score',
    'feedback',
  ];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
