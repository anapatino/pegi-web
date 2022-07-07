import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import {
  CreateSubLine,
  emptySubline,
  SubLineResponse,
} from '../../models/subline';
import { CreateLine, emptyLine, LineResponse } from '../../models/line';
import { LinesService } from '../../../services/lines.service';
import { SubLinesService } from '../../../services/sub-line.service';
import { AreasService } from '../../../services/thematic-areas.service';
import {
  AreaResponse,
  CreateArea,
  emptyArea,
} from '../../models/thematic-area';

@Component({
  selector: 'app-register-lines',
  templateUrl: './register-lines.component.html',
  styleUrls: ['./register-lines.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class RegisterLinesComponent implements OnInit {
  lines: LineResponse[] = [];
  lineRequest: CreateLine = { ...emptyLine };

  linesControl = new FormControl<LineResponse[]>(
    this.lines,
    Validators.required
  );

  subLine: CreateSubLine = { ...emptySubline };
  subLines: SubLineResponse[] = [];

  subLinesControl = new FormControl<SubLineResponse[]>(
    this.subLines,
    Validators.required
  );

  thematicArea: CreateArea = { ...emptyArea };
  thematicAreas: AreaResponse[] = [];

  linesFormGroup = this._formBuilder.group({
    linesCtrl: ['', Validators.required],
  });

  subLinesFormGroup = this._formBuilder.group({
    subLinesCtrl: ['', Validators.required],
  });

  areasFormGroup = this._formBuilder.group({
    areasCtrl: ['', Validators.required],
  });

  constructor(
    private _formBuilder: FormBuilder,
    private linesService: LinesService,
    private subLinesService: SubLinesService,
    private thematicAreasService: AreasService
  ) {}

  ngOnInit(): void {
    this.updateData();
  }

  private clear(): void {
    this.subLine = { ...emptySubline };
    this.lineRequest = { ...emptyLine };
    this.thematicArea = { ...emptyArea };
  }

  private updateData(): void {
    this.linesService.getLines().subscribe((resp) => (this.lines = resp.data));
  }

  updateSubLines(lineResponse: LineResponse): void {
    this.subLinesService
      .getSubLineByLineCode(lineResponse.code)
      .subscribe((resp) => (this.subLines = resp.data));
  }

  saveLine() {
    this.linesService.saveLine(this.lineRequest).subscribe((resp) => {
      alert(resp.message);
      this.updateData();
      this.clear();
    });
  }

  saveSubLine() {
    this.subLinesService.saveSubLine(this.subLine).subscribe((resp) => {
      alert(resp.message);
      this.updateData();
      this.clear();
    });
  }

  saveArea() {
    this.thematicAreasService
      .saveThematicArea(this.thematicArea)
      .subscribe((resp) => {
        alert(resp.message);
        this.updateData();
        this.clear();
      });
  }
}
