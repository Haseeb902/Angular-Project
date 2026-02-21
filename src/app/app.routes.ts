import { Routes } from '@angular/router';
import { Navbar } from './Header/navbar/navbar';
import { Home } from './Pages/home/home';
import { Login } from './Auth/login/login';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // redirect path as string
  { path: 'home', component: Home },
  { path: 'login', component: Login },
];
