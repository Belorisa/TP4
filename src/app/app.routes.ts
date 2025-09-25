import { Routes } from '@angular/router';
import { Contact } from './components/contact/contact';
import { Login } from './components/login/login';
import { NotFound } from './components/not-found/not-found';
import { Register } from './components/register/register';
import { Home } from './components/home/home';
import { profilsGuard } from './guards/profils-guard';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'contact', component: Contact },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'profil', canActivate: [profilsGuard], loadChildren: () => import('./components/profil/profil.route').then(m => m.PROFIL_ROUTES) },
    { path: '**', component: NotFound }
];
