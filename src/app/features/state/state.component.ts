import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StateService } from '../../services/state.service';
import { State } from '../../interfaces/state';
import { HttpClientModule } from '@angular/common/http';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-state',
  standalone: true,
  imports: [
    AsyncPipe,
    [CommonModule, RouterOutlet, RouterLink]
  ],
  templateUrl: './state.component.html',
  styleUrl: './state.component.css'
})
export class StateComponent {
  stateSvc = inject(StateService);
  states$ = this.stateSvc.getList();

  /* formState: FormGroup;
  states$ = this.stateSvc.getList();

  constructor(
    private stateSvc: StateService,
    private fb: FormBuilder
  ) {
    this.formState = this.fb.group({
      name: ['', Validators.required]
    });
  }

  addState() {
    if (this.formState.valid) {
      const request: State = {
        id: 0, // El ID se asignará en el servidor
        name: this.formState.value.name
      };
      this.stateSvc.add(request).subscribe({
        next: (data) => {
          // Actualizar la lista de estados
          this.states$ = this.stateSvc.getList();
          // Restablecer el formulario
          this.formState.reset();
        },
        error: (e) => console.error(e)
      });
    }
  }

  deleteState(idState: number) {
    this.stateSvc.delete(idState).subscribe({
      next: () => {
        // Actualizar la lista de estados
        this.states$ = this.stateSvc.getList();
      },
      error: (e) => console.error(e)
    });
  } */

}
