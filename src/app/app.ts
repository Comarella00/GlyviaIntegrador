import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './components/header/header';
import {Login} from './components/login/login';
import {Perguntas} from './components/perguntas/perguntas';
import {Sidebar} from './components/sidebar/sidebar';
import {Profile} from './components/profile/profile';
import {Addglicemia} from './components/addglicemia/addglicemia';
import {Contarcarboidratos} from './components/contarcarboidratos/contarcarboidratos';
import {Carboidratos} from './components/carboidratos/carboidratos';
import {Resumorefeicao} from './components/resumorefeicao/resumorefeicao';
import {Alertacarboidratos} from './components/alertacarboidratos/alertacarboidratos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Login, Perguntas, Sidebar, Profile, Addglicemia, Contarcarboidratos, Carboidratos, Resumorefeicao, Alertacarboidratos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Glyvia1');
}
