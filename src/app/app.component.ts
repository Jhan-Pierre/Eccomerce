import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { FormBuilder, FormGroup, Validators, ReactiveFormsModule,} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { State } from './interfaces/state';

import { initFlowbite } from 'flowbite';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './features/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    [CommonModule, RouterOutlet, RouterLink],
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  ngOnInit(): void {
    initFlowbite();
  }

}