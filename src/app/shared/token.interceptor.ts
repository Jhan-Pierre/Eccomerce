import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  if(authService.getToken()){
    const cloned = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authService.getToken()}`)
    });

    return next(cloned);
  }
  inject(Router).navigate(['/401']);
  return next(req);
};
