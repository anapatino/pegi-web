import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackProjectComponent } from './feedback-project.component';

describe('FeedbackProjectComponent', () => {
  let component: FeedbackProjectComponent;
  let fixture: ComponentFixture<FeedbackProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
