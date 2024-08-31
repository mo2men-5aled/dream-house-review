import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sending-stage',
  standalone: true,
  imports: [],
  templateUrl: './sending-stage.component.html',
  styleUrl: './sending-stage.component.css',
})
export class SendingStageComponent {
  @Input() progress: number = 0;
}
