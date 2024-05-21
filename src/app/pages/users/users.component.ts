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

@Directive({
  selector: '[appDropdownToggle]'
})
export class DropdownToggleDirective {
  @Input() appDropdownToggle!: string;

  constructor(private el: ElementRef) {}

  @HostListener('click') toggleOpen() {
    const dropdown = document.getElementById(this.appDropdownToggle);
    if (dropdown) {
      dropdown.classList.toggle('hidden');
    }
  }
}