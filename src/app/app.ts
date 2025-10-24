import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './components/header/header';
import {Login} from './pages/login/login';
import {Perguntas} from './pages/perguntas/perguntas';
import {Sidebar} from './components/sidebar/sidebar';
import {Profile} from './pages/profile/profile';
import {Addglicemia} from './pages/addglicemia/addglicemia';
import {Contarcarboidratos} from './pages/contarcarboidratos/contarcarboidratos';
import {Carboidratos} from './components/carboidratos/carboidratos';
import {Resumorefeicao} from './components/resumorefeicao/resumorefeicao';
import {Alertacarboidratos} from './components/alertacarboidratos/alertacarboidratos';
import {Historico} from './pages/historico/historico';
import {Relatoriosgraficos} from './pages/relatoriosgraficos/relatoriosgraficos';
import {Lembretes} from './pages/lembretes/lembretes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Login, Perguntas, Sidebar, Profile, Addglicemia, Contarcarboidratos,
    Carboidratos, Resumorefeicao, Alertacarboidratos, Historico, Relatoriosgraficos, Lembretes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Glyvia1');
}
