import { Routes } from '@angular/router';
import { HomeComponent } from './ui/pages/home/home.ts'; // проверьте путь до вашего файла!

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Путь '' означает главную страницу
];