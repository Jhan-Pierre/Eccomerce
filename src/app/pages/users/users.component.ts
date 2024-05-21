import { Component, Directive, ElementRef, HostListener, Input, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe,
    CommonModule
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  authService = inject(AuthService);

  users$ = this.authService.getAll();
}