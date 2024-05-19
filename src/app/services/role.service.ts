import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Role } from '../interfaces/role';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private readonly apiUrl: string = environment.endPoint + 'roles/';

  constructor(private http:HttpClient) {}

  getRoles = () : Observable<Role[]> => {
    return this.http.get<Role[]>(this.apiUrl);
  }
}
