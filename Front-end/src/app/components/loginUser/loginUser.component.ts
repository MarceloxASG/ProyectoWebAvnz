import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './loginUser.component.html',
  styleUrl: './loginUser.component.css'
})
export class loginUserComponent {
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
          console.log('Login successful', response);
          this.router.navigate(['/mainUser']); // Redirige al usuario a la página principal después del inicio de sesión
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