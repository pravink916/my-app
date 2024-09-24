import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  template: ` <div class="h-full flex flex-col justify-center items-center">
    <p class="text-6xl">
      Hi all, I am <strong class="text-green-400">Pravin.</strong>
    </p>
    <p class="text-5xl mt-5">
      I am a
      <strong class="text-green-400">Senior Full Stack Developer.</strong>
    </p>
  </div>`,
})
export class IntroComponent {}
