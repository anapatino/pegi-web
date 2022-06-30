import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableContentProjectComponent } from './table-content-project.component';

describe('TableContentProjectComponent', () => {
  let component: TableContentProjectComponent;
  let fixture: ComponentFixture<TableContentProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableContentProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableContentProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
