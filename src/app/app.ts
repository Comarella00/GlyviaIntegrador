import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './components/header/header';
import {Login} from './components/login/login';
import {Perguntas} from './components/perguntas/perguntas';
import {Sidebar} from './components/sidebar/sidebar';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Login, Perguntas, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Glyvia1');
}
