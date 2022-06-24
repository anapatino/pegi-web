import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAssessorComponent } from './search-assessor.component';

describe('SearchAssessorComponent', () => {
  let component: SearchAssessorComponent;
  let fixture: ComponentFixture<SearchAssessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAssessorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchAssessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
