import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLinesComponent } from './register-lines.component';

describe('RegisterLinesComponent', () => {
  let component: RegisterLinesComponent;
  let fixture: ComponentFixture<RegisterLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterLinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
