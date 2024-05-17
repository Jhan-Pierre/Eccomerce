import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { FormBuilder, FormGroup, Validators, ReactiveFormsModule,} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { State } from './interfaces/state';
import { StateService } from './services/state.service';

import { initFlowbite } from 'flowbite';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    [CommonModule, RouterOutlet, RouterLink]
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  

  
}