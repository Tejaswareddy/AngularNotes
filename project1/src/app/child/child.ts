import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.html',
  styleUrls: ['./child.css'],
})
export class Child {

  @Input() data: string = "";

  @Input() User!: {
    name: string;
    age: number;
  };

  @Output() notify = new EventEmitter<string>();

  senddata() {
    this.notify.emit("This is the msg you are waiting for");
  }
}