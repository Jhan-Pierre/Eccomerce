import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { State } from '../interfaces/state';  

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private endpoint:string = environment.endPoint;

  private apiUrl:string = this.endpoint + "State/";

  constructor(private http:HttpClient) { }
  getList():Observable<State[]> { 
    return this.http.get<State[]>(`${this.apiUrl}List`);
  }

  add(request:State):Observable<State> {
    return this.http.post<State>(`${this.apiUrl}Add`, request);
  }
  delete(idState:number):Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}Delete/${idState}`);
  }
}
