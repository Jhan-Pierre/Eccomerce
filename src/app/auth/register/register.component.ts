import { Component, OnInit, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Role } from '../../interfaces/role';
import { Observable } from 'rxjs';
import { RoleService } from '../../services/role.service';
import { AsyncPipe, CommonModule } from '@angular/common';

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
  roles$!:Observable<Role[]>;

  registerForm!: FormGroup;
  selectedRoles: number[] = [];
  router = inject(Router);

  register(){

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

  /* onRoleChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    const value = parseInt(checkbox.value, 10);

    if (checkbox.checked) {
      this.selectedRoles.push(value);
    } else {
      const index = this.selectedRoles.indexOf(value);
      if (index > -1) {
        this.selectedRoles.splice(index, 1);
      }
    }

    this.registerForm.patchValue({ roles: this.selectedRoles });
  } */

  private passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      return { 'passwordMismatch': true };
    }
    return null;
  }
  
}
