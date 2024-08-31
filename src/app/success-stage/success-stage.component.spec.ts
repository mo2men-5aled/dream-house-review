import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessStageComponent } from './success-stage.component';

describe('SuccessStageComponent', () => {
  let component: SuccessStageComponent;
  let fixture: ComponentFixture<SuccessStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessStageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
