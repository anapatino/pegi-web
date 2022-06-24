import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLinesComponent } from './search-lines.component';

describe('SearchLinesComponent', () => {
  let component: SearchLinesComponent;
  let fixture: ComponentFixture<SearchLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchLinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
