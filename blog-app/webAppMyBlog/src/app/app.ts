import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './ui/components/header/header.ts'; // пути могут отличаться
import { FooterComponent } from './ui/components/footer/footer.ts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent], // ОБЯЗАТЕЛЬНО добавьте их сюда
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent { }