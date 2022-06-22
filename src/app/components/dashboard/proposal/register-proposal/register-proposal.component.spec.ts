import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProposalComponent } from './register-proposal.component';

describe('RegisterProposalComponent', () => {
  let component: RegisterProposalComponent;
  let fixture: ComponentFixture<RegisterProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterProposalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
