import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TascaComponent} from "./tasca/tasca.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TascaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GestioDeFitxersAngular';
}
