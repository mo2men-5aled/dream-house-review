import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prob',
  standalone: true,
  imports: [NgIf],
  templateUrl: './prob.component.html',
  styleUrl: './prob.component.css',
})
export class ProbComponent {
  @Input() handleProceed: () => void;
  currentStage: number = 1;

  constructor() {
    this.handleProceed = () => {};
  }

  // this step has internally 2 steps
  nextStageOfStepThree() {
    if (this.currentStage < 3) {
      this.currentStage++;
    }
  }
}
