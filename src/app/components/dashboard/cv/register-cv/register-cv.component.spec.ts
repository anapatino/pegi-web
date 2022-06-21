import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCvComponent } from './register-cv.component';

describe('RegisterCvComponent', () => {
  let component: RegisterCvComponent;
  let fixture: ComponentFixture<RegisterCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
