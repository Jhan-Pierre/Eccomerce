import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { AccountComponent } from './pages/account/account.component';
import { authGuard } from './guards/auth.guard';
import { _404Component } from './errors/404/404.component';
import { _401Component } from './errors/401/401.component';
import { UsersComponent } from './pages/users/users.component';
import { roleGuard } from './guards/role.guard';
import { ADMIN, USER } from './constants/roles.constants';

export const routes: Routes = [
    //El orden es importante para el ruteo
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'account/:id', component: AccountComponent, canActivate: [authGuard]},
    {path: 'users', component: UsersComponent, 
        canActivate: [roleGuard], 
        data:{
            roles: [ADMIN],
        }
    },
    //{path: "", redirectTo: '/login', pathMatch: 'full'}

    //Paginas de errores como la 404 es mejor ponerlo al ultimo para que la valide las rutas de arriba
    { path: '401', component: _401Component },
    { path: '404', component: _404Component },
    { path: '**', redirectTo: '/404' }
];
