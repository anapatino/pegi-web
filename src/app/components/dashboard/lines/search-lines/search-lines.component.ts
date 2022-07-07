import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CreateLine, emptyLine, LineResponse } from '../../lines/models/line';
import {
  CreateSubLine,
  emptySubline,
  SubLineResponse,
} from '../models/subline';
import { AreaResponse, CreateArea, emptyArea } from '../models/thematic-area';
import { LinesService } from '../../services/lines.service';
import { SubLinesService } from '../../services/sub-line.service';
import { AreasService } from '../../services/thematic-areas.service';

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
  displayedColumns: string[] = ['name'];
  dataSource = [];
  lines: LineResponse[] = [];

  linesControl = new FormControl<LineResponse[]>(
    this.lines,
    Validators.required
  );

  subLines: SubLineResponse[] = [];

  subLinesControl = new FormControl<SubLineResponse[]>(
    this.subLines,
    Validators.required
  );

  thematicAreas: AreaResponse[] = [];

  constructor(
    private linesService: LinesService,
    private subLinesService: SubLinesService,
    private thematicAreasService: AreasService
  ) {}

  ngOnInit(): void {
    this.viewLines();
  }

  viewLines(): void {
    this.linesService.getLines().subscribe((resp) => {
      this.lines = resp.data;
      this.dataSource = this.lines;
    });
  }

  viewSubLines(lineResponse: LineResponse): void {
    this.subLinesService
      .getSubLineByLineCode(lineResponse.code)
      .subscribe((resp) => {
        this.subLines = resp.data;
        this.dataSource = this.subLines;
      });
  }

  viewAreas(subLineResponse: SubLineResponse): void {
    this.thematicAreasService
      .getThematicAreaBySubLineCode(subLineResponse.code)
      .subscribe((resp) => {
        this.thematicAreas = resp.data;
        this.dataSource = this.thematicAreas;
      });
  }
}
