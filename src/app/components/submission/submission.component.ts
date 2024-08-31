import { NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { SuccessStageComponent } from '../../success-stage/success-stage.component';
import { SendingStageComponent } from '../../sending-stage/sending-stage.component';

@Component({
  selector: 'app-submission',
  standalone: true,
  imports: [NgStyle, NgIf, SuccessStageComponent, SendingStageComponent],
  templateUrl: './submission.component.html',
  styleUrl: './submission.component.css',
})
export class SubmissionComponent {
  progress: number = 0;
  loading: boolean = true;

  ngOnInit(): void {
    this.startProgress();
  }

  startProgress(): void {
    const interval = setInterval(() => {
      if (this.progress < 100) {
        this.progress += 1; // Increment the progress by 1%
      } else {
        clearInterval(interval);
        this.loading = false;
      }
    }, 50); // Adjust the interval time for the desired progress speed
  }
}
