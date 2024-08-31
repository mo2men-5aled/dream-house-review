import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [],
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.css',
})
export class SelectionComponent {
  selectedPlaceType: string | null = null;
  selectedAppartmentType: string | null = null;
  currentStage: number = 1;

  @Input() handleProceed: () => void;

  constructor() {
    this.handleProceed = () => {};
  }

  handlePlaceTypeSelection(type: string) {
    this.selectedPlaceType = type;
  }

  handleAppartmentTypeSelection(type: string) {
    this.selectedAppartmentType = type;
  }

  // this step has internally 2 steps
  nextStageOfStepTwo() {
    if (this.currentStage < 3) {
      this.currentStage++;
    }
  }
}
