import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyEmailInputComponent } from './verify-email-input.component';

describe('VerifyEmailInputComponent', () => {
  let component: VerifyEmailInputComponent;
  let fixture: ComponentFixture<VerifyEmailInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifyEmailInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyEmailInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
