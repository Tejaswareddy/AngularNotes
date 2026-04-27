import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive , RouterOutlet],
  templateUrl: './nav.html',
  styleUrls: ['./nav.css'],
})
export class Nav {

  route = inject(Router); 

  clickBTN() {
    this.route.navigate(['/about'], {
      queryParams: {
      name: 'tejeswar',
      age: 22
    }
    }); 
  }
}