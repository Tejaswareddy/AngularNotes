import { Component } from '@angular/core';
import { Child } from '../child/child';

interface User {
  name: string;
  age: number;
}

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [Child],
  templateUrl: './parent.html',
  styleUrls: ['./parent.css'],
})
export class Parent {
  data: string = "Hello from Parent";

  User: User = {
    name: "Teja",
    age: 20
  };

  childData: string = "";

  getevent(val: string) {
    this.childData = val;
  }

  toggle(audio: HTMLAudioElement) {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
}