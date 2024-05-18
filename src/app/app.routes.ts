import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { SignupComponent } from './features/signup/signup.component';
import { StateComponent } from './features/state/state.component';
import { DetailComponent } from './features/state/detail/detail.component';
import { UsersComponent } from './features/users/users.component';

export const routes: Routes = [
    //El orden es importante para el ruteo
    {path: 'user', component: UsersComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'state', component: StateComponent},
    {path: 'state-detail/:id', component: DetailComponent}
    //{path: "", redirectTo: '/login', pathMatch: 'full'}

    //Paginas de errores como la 404 es mejor ponerlo al ultimo para que la valide las rutas de arriba
];
