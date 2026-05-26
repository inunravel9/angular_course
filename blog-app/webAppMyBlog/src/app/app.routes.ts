import { Routes } from '@angular/router';
import { Home } from './ui/pages/home/home';
import { BlogComponent } from './ui/pages/blog/blog';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home }, // Путь '' означает главную страницу
  { path: 'blog', component: BlogComponent },
];