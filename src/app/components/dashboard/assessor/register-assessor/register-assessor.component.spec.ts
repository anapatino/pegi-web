import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAssessorComponent } from './register-assessor.component';

describe('RegisterAssessorComponent', () => {
  let component: RegisterAssessorComponent;
  let fixture: ComponentFixture<RegisterAssessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAssessorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterAssessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
