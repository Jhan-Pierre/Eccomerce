import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { LoginRequest } from '../interfaces/login-request';
import { Observable, map } from 'rxjs';
import { AuthResponse } from '../interfaces/auth-response';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl: string = environment.endPoint + 'account/';

  private tokenKey:string = 'token';

  constructor(private http:HttpClient) { }

  login(data:LoginRequest):Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this.apiUrl}login`, data).pipe(
      map((response) => {
        if (response.isSuccess) {
          localStorage.setItem(this.tokenKey, response.token);
        }
        return response;
      })
    );
  }

  isLoggedIn=():boolean => {
    const token = this.getToken();
    if (!token) return false;

    return !this.isTokenExpired();
  }

  private getToken = ():string|null => localStorage.getItem(this.tokenKey) || '';


  private isTokenExpired() {
    // Obtiene el token almacenado utilizando el método getToken
    const token = this.getToken();

    // Si no hay token, retorna true (el token se considera expirado)
    if (!token) return true;

    // Decodifica el token utilizando la función jwtDecode
    const decoded = jwtDecode(token);

    // Verifica si la fecha actual es mayor o igual a la fecha de expiración del token
    const isTokenExpired = Date.now() >= decoded['exp']! * 1000;

    // Si el token ha expirado, llama al método logout para cerrar sesión
    if (isTokenExpired) this.logout();

    // Retorna el estado de expiración del token (true si ha expirado, false en caso contrario)
    return isTokenExpired;
  }


  logout=():void =>{
    localStorage.removeItem(this.tokenKey);
  }

  getUserDetail=()=>{
    const token = this.getToken();
    if (!token) return null;

    const decodedToken:any = jwtDecode(token);
    const userDetail ={
      name: decodedToken.name,
      email: decodedToken.email,
      id: decodedToken.nameid,
      role: decodedToken.role || []
    }
    return userDetail;
  }

}
