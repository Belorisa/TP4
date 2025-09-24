import { Routes } from '@angular/router';
import { App } from './app';
import { Contact } from './components/contact/contact';
import { Login } from './components/login/login';
import { Profil } from './components/profil/profil';
import { NotFound } from './components/not-found/not-found';
import { Register } from './components/register/register';
import { Home } from './components/home/home';

export const routes: Routes = [
    {path: '',redirectTo: '/home',pathMatch: 'full'},
    {path: 'home',component: Home},
    {path: 'contact',component: Contact},
    {path: 'login',component: Login},
    {path: 'register',component: Register},
    {path: 'profile/:id',component: Profil},
    {path: '**',component: NotFound }
];
