import { Component } from '@angular/core';
import { IntroComponent } from '../intro/intro.component';
import { AboutComponent } from "../about/about.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [IntroComponent, AboutComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
