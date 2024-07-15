import { Component, computed, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [AppService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';

  constructor(private readonly appService: AppService) {}

  getPravin = toSignal(this.appService.getPravin())



}


