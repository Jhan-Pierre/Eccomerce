import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { AccountComponent } from './features/account/account.component';
import { authGuard } from './guards/auth.guard';
import { _404Component } from './errors/404/404.component';
import { _401Component } from './errors/401/401.component';


export const routes: Routes = [
    //El orden es importante para el ruteo
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'account/:id', component: AccountComponent, canActivate: [authGuard]},
    //{path: "", redirectTo: '/login', pathMatch: 'full'}

    //Paginas de errores como la 404 es mejor ponerlo al ultimo para que la valide las rutas de arriba
    {path: '401', component: _401Component},
    { path: '404', component: _404Component },
    { path: '**', redirectTo: '/404' }
];
