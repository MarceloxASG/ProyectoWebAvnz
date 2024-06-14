import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './registerUser.component.html',
  styleUrl: './registerUser.component.css'
})
export class registerUserComponent {
  user = {
    username: '',
    email: '',
    password1: '',
    password2: '',
    is_employee: true
  };
  error: string | null = null;
  
  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    if (!this.user.username || !this.user.email || !this.user.password1 || !this.user.password2) {
      this.error = 'Por favor, completa todos los campos.';
      return;
    }

    if (this.user.password1 !== this.user.password2) {
      this.error = 'Las contraseñas no coinciden';
      return;
    }

    this.authService.register(this.user)
    .pipe(
      tap((response: any) => {
        if (response && response.message === "Registration successful") {
          console.log('Registration successful', response);
          this.router.navigate(['/user']); // Redirige al usuario al login después del registro exitoso
        } else {
          this.error = 'Por favor, revise su correo y/o contraseña ';
        }
      }),
      catchError((error: any) => {
        console.error('Error registering', error);
        this.error = 'Error en el registro: ' + (error.error ? JSON.stringify(error.error) : 'Desconocido');
        return throwError(error);
      })
    )
    .subscribe();
  }
}