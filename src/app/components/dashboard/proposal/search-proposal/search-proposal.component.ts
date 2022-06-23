import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

@Component({
  selector: 'app-search-proposal',
  templateUrl: './search-proposal.component.html',
  styleUrls: ['./search-proposal.component.scss'],
})
export class SearchProposalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
