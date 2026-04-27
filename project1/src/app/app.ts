import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { nav } from './nav/nav';
import { main } from './main/main';
import { footer } from './footer/footer';
import { DataBinding } from './data-binding/data-binding';
import { Parent } from './parent/parent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, nav, main, footer, DataBinding, Parent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] 
})
export class App {
  protected readonly title = signal('project1');
}