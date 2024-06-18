import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-pagina2',
  templateUrl: './loginAdmin.component.html',
  styleUrls: ['./loginAdmin.component.css']
})
export class LoginAdminComponent {
  credentials = {
    username: '',
    password: ''
  };
  error: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (!this.credentials.username || !this.credentials.password) {
      this.error = 'Por favor, ingresa tu nombre de usuario y contraseña.';
      return;
    }

    this.authService.login(this.credentials)
      .pipe(
        tap((response: any) => {
          if (response && response.token) { // Condición para verificar el éxito del login
            if (response.message.includes('Admin login successful')) {
              console.log('Admin login successful', response);
              this.router.navigate(['/mainAdmin']); // Redirige al admin a la página principal después del inicio de sesión
            } else if (response.message.includes('Employee login successful')) {
              this.error = 'Esta es cuenta de empleado';
            }
          } else {
            this.error = 'Usuario o contraseña incorrectos';
          }
        }),
        catchError((error: any) => {
          console.error('Error logging in', error);
          this.error = 'Usuario o contraseña incorrectos'; // Maneja el mensaje de error para mostrar al usuario
          return throwError(error); // Se reenvia el error para manejarlo en otro lugar
        })
      )
      .subscribe();
  }
}
