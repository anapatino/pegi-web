import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableContentEvaluatorsProjectComponent } from './table-content-evaluators-project.component';

describe('TableContentEvaluatorsProjectComponent', () => {
  let component: TableContentEvaluatorsProjectComponent;
  let fixture: ComponentFixture<TableContentEvaluatorsProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableContentEvaluatorsProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableContentEvaluatorsProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
