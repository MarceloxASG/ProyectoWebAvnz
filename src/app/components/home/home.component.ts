import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  hoveredUser: boolean = false;
  hoveredAdmin: boolean = false;
  
  constructor(private router: Router) {}

  selectRole(role: string): void {
    if (role === 'user') {
      this.router.navigate(['/user']);
    } else if (role === 'admin') {
      this.router.navigate(['/admin']);
    }
  }
  
}
