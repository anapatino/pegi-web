import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface assesors {
  name: string;
  position: number;
  availability: string;
  consultancies: string;
  hours: string;
}

const ELEMENT_DATA: assesors[] = [
  {
    position: 1,
    name: 'Eydy Suarez',
    availability: 'Ocupada',
    consultancies: 'Bloque C 303',
    hours: '4:30 PM',
  },
  {
    position: 2,
    name: 'Helium',
    availability: 'Ocupada',
    consultancies: 'Bloque C 303',
    hours: '4:30 PM',
  },
  {
    position: 3,
    name: 'Lithium',
    availability: 'Disponible',
    consultancies: 'Bloque A 303',
    hours: '4:30 PM',
  },
  {
    position: 4,
    name: 'Beryllium',
    availability: 'Ocupada',
    consultancies: 'Bloque A 303',
    hours: '4:30 PM',
  },
  {
    position: 5,
    name: 'Boron',
    availability: 'Disponible',
    consultancies: 'Bloque A 303',
    hours: '4:30 PM',
  },
];

@Component({
  selector: 'app-search-assessor',
  templateUrl: './search-assessor.component.html',
  styleUrls: ['./search-assessor.component.scss'],
})
export class SearchAssessorComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'name',
    'availability',
    'consultancies',
    'hours',
  ];
  dataSource = ELEMENT_DATA;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  updateAsessors(): void {
    this.router.navigate(['/dashboard/registerAssesor']);
  }
}
