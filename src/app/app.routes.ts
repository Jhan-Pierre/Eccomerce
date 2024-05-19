import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { RegisterComponent } from './auth/register/register.component';


export const routes: Routes = [
    //El orden es importante para el ruteo
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
    //{path: "", redirectTo: '/login', pathMatch: 'full'}

    //Paginas de errores como la 404 es mejor ponerlo al ultimo para que la valide las rutas de arriba
];
