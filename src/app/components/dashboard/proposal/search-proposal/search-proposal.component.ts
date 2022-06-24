import { Component, OnInit } from '@angular/core';

export interface proposals {
  name: string;
  position: number;
  status: string;
  score: number;
}

const ELEMENT_DATA: proposals[] = [
  {
    position: 1,
    name: 'Investigacion de Grillos',
    status: 'pendiente',
    score: 0,
  },
  { position: 2, name: 'Helium', status: 'pendiente', score: 0 },
  { position: 3, name: 'Lithium', status: 'calificada con arreglos', score: 4 },
  { position: 4, name: 'Beryllium', status: 'pendiente', score: 0 },
  { position: 5, name: 'Boron', status: 'calificada', score: 3.7 },
];

@Component({
  selector: 'app-search-proposal',
  templateUrl: './search-proposal.component.html',
  styleUrls: ['./search-proposal.component.scss'],
})
export class SearchProposalComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'status', 'score'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
