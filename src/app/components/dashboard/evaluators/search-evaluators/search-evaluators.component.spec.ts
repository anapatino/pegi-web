import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEvaluatorsComponent } from './search-evaluators.component';

describe('SearchEvaluatorsComponent', () => {
  let component: SearchEvaluatorsComponent;
  let fixture: ComponentFixture<SearchEvaluatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchEvaluatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchEvaluatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
