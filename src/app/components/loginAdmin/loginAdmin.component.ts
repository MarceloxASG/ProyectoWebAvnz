import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  templateUrl: './loginAdmin.component.html',
  styleUrl: './loginAdmin.component.css'
})
export class loginAdminComponent {
  constructor(private router: Router) {}

  login(): void {
    // Aquí puedes añadir la lógica de autenticación
    this.router.navigate(['/mainAdmin']);
  }
}
