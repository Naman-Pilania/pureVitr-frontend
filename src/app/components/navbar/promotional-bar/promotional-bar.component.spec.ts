import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionalBarComponent } from './promotional-bar.component';

describe('PromotionalBarComponent', () => {
  let component: PromotionalBarComponent;
  let fixture: ComponentFixture<PromotionalBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromotionalBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionalBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
