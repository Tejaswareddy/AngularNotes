import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReversepipePipe } from '../../customPipes/reversepipe-pipe';
// import { Service123 } from '../service123';

interface User {
  name: string;
  age: number;
  city: string;
  dis: string;
  salary: number;
}

@Component({
  selector: 'app-pipe-component',
  standalone: true,
  imports: [
    CommonModule,        
    ReversepipePipe,
    // Service123     
  ],
  templateUrl: './pipe-component.html',
})
export class PipeComponent {

  

  User: User[] = [
    {
      name: "teja",
      age: 20,
      city: "Delhi",
      dis: "Developer",
      salary: 50000
    },
    {
      name: "rahul",
      age: 22,
      city: "Mumbai",
      dis: "Designer",
      salary: 40000
    },
    {
      name: "aman",
      age: 25,
      city: "Bangalore",
      dis: "Tester",
      salary: 45000
    }
  ];

}