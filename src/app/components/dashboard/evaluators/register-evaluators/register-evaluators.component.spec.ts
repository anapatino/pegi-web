import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEvaluatorsComponent } from './register-evaluators.component';

describe('RegisterEvaluatorsComponent', () => {
  let component: RegisterEvaluatorsComponent;
  let fixture: ComponentFixture<RegisterEvaluatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterEvaluatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterEvaluatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
