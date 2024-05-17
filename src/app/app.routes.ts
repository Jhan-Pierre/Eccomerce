import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { StateComponent } from './components/state/state.component';

export const routes: Routes = [
    //El orden es importante para el ruteo
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'state', component: StateComponent},
    //{path: "", redirectTo: '/login', pathMatch: 'full'}

    //Paginas de errores como la 404 es mejor ponerlo al ultimo para que la valide las rutas de arriba
];
