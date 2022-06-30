import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProposalEvaluatorsComponent } from './search-proposal-evaluators.component';

describe('SearchProposalEvaluatorsComponent', () => {
  let component: SearchProposalEvaluatorsComponent;
  let fixture: ComponentFixture<SearchProposalEvaluatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchProposalEvaluatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchProposalEvaluatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
