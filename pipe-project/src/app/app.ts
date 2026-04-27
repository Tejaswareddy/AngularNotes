import { Component, Pipe, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipeComponent } from './component/pipe-component/pipe-component';
import { Forms } from './component/forms/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PipeComponent, Forms],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pipe-project');
}
