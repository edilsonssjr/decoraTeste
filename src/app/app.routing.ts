import { AuthGuard } from './auth.guard';
import { UsuarioComponent } from './usuario/usuario.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const ROUTES: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
    { path: 'usuario', component: UsuarioComponent, canActivate:[AuthGuard]}
];

export const routing: ModuleWithProviders = RouterModule.forRoot( ROUTES );
