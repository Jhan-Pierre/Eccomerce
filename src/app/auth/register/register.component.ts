import { Component, OnInit, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Role } from '../../interfaces/role';
import { Observable } from 'rxjs';
import { RoleService } from '../../services/role.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ValidationError } from '../../interfaces/validation-error';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    AsyncPipe,
    CommonModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  fb = inject(FormBuilder);

  roleService = inject(RoleService);
  authService = inject(AuthService);

  roles$!:Observable<Role[]>;

  registerForm!: FormGroup;

  router = inject(Router);

  errors!: ValidationError[];

  register() {
    if (this.registerForm.invalid) {
      console.log("Formulario invalido");
      return;
    }

    const formData = this.registerForm.value;

    this.authService.register(formData).subscribe({
      next: (response) => {
        console.log(response);
        // Redirige a la página de inicio de sesión después de un registro exitoso
        this.router.navigate(['/login']);
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 400) {
          this.errors = error.error;
          console.log("Error de validacion");
        }
      },
      complete: () => {
        console.log("Completado");
      }
    });
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      fullName: ['', Validators.required],
      roles: [''],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.passwordMatchValidator
    });
    this.roles$ = this.roleService.getRoles();
  }

  private passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      return { 'passwordMismatch': true };
    }
    return null;
  }
  
}
