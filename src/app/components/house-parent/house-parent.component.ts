import { Component } from '@angular/core';

import { PreStepComponent } from '../pre-step/pre-step.component';
import { ProbComponent } from '../prob/prob.component';
import { SelectionComponent } from '../selection/selection.component';
import { SubmissionComponent } from '../submission/submission.component';
import { NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-house-parent',
  templateUrl: './house-parent.component.html',
  standalone: true,
  imports: [
    PreStepComponent,
    ProbComponent,
    SelectionComponent,
    SubmissionComponent,
    NgIf,
    NgStyle,
  ],
  styleUrls: ['./house-parent.component.css'],
})
export class HouseParentComponent {
  currentStep: number = 1;
  totalSteps: number = 4; // Adjust based on the total number of steps

  get progressWidth(): string {
    return `${(this.currentStep / this.totalSteps) * 100}%`;
  }

  handleProceed = () => {
    this.nextStep();
  };

  nextStep() {
    if (this.currentStep < 4) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  finish() {
    alert('Review Submitted!');
  }
}
