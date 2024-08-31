import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-pre-step',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './pre-step.component.html',
  styleUrl: './pre-step.component.css',
})
export class PreStepComponent {
  selectedType: string | null = null;
  @Input() handleProceed: () => void;

  constructor() {
    this.handleProceed = () => {};
  }

  handleTypeSelection(type: string) {
    this.selectedType = type;
  }
}
