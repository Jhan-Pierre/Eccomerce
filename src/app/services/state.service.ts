import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { State } from '../interfaces/state';  

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private readonly _http = inject(HttpClient);

  private readonly endpoint:string = environment.endPoint;

  private readonly apiUrl:string = this.endpoint + "State/";

  getList():Observable<State[]> { 
    return this._http.get<State[]>(`${this.apiUrl}List`);
  }

  add(request:State):Observable<State> {
    return this._http.post<State>(`${this.apiUrl}Add`, request);
  }
  delete(idState:number):Observable<void> {
    return this._http.delete<void>(`${this.apiUrl}Delete/${idState}`);
  }
}
