import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendingStageComponent } from './sending-stage.component';

describe('SendingStageComponent', () => {
  let component: SendingStageComponent;
  let fixture: ComponentFixture<SendingStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendingStageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendingStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
