import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HouseParentComponent } from "./components/house-parent/house-parent.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HouseParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dream-house-review';
}
