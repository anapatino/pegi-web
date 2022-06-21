import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCvComponent } from './search-cv.component';

describe('SearchCvComponent', () => {
  let component: SearchCvComponent;
  let fixture: ComponentFixture<SearchCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
