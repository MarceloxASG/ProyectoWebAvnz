import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina1',
  templateUrl: './loginUser.component.html',
  styleUrl: './loginUser.component.css'
})
export class loginUserComponent {
  constructor(private router: Router) {}

  login(): void {
    // Aquí puedes añadir la lógica de autenticación
    this.router.navigate(['/mainUser']);
  }
}
