import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FormBuilder, FormGroup, Validators, ReactiveFormsModule,} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { State } from './interfaces/state';
import { StateService } from './services/state.service';

import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  listState: State[] = [];
  formState: FormGroup;
  constructor(
    private _stateService: StateService,
    private fb: FormBuilder
  ) {
      this.formState = this.fb.group({
        name: ['', Validators.required]
      });
  }

  getState(){
    this._stateService.getList().subscribe({
      next: (data) =>{
       this.listState = data;
      },error:(e) => {}
    });
  }

  //Lo que carga ni bien inicia
  ngOnInit(): void {
    this.getState();
    initFlowbite();
  }

  addState(){
    const request: State = {
      id: 0,
      name: this.formState.value.name //obtener del formulario el valor del campo nombre
    }

    this._stateService.add(request).subscribe({
      next: (data) =>{
       this.listState.push(data); //Guardar los datos
       this.formState.patchValue({
        name:'' //reestablecer el campo nombre
       });
      },error:(e) => {}
    });
  }

  deleteState(state:State){
    this._stateService.delete(state.id).subscribe({
      next: (data) =>{
        const newList = this.listState.filter(item => item.id != state.id) // reccupera la lista excluyendo al que se elimino
        this.listState = newList; //actualiza la vista para reflejar el usuario eliminado
      },error:(e) => {
        console.log(e);
      }
    });
  }

}