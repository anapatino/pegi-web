import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableContentEvaluatorsComponent } from './table-content-evaluators.component';

describe('TableContentEvaluatorsComponent', () => {
  let component: TableContentEvaluatorsComponent;
  let fixture: ComponentFixture<TableContentEvaluatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableContentEvaluatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableContentEvaluatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
