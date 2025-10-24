import { RouterModule, Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Cadastro } from './pages/cadastro/cadastro';
import { Dashboard } from './pages/dashboard/dashboard';
import { NgModule } from '@angular/core';
import { Bemvindo } from './pages/bemvindo/bemvindo';
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
import {Addremedio} from './components/addremedio/addremedio';
import {Addconsulta} from './components/addconsulta/addconsulta';
import {Mainremedios} from './components/mainremedios/mainremedios';
import {Mainconsultas} from './components/mainconsultas/mainconsultas';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'cadastro', component: Cadastro },
  { path: 'dashboard', component: Dashboard },
  { path: 'login', component: Login },
  { path: 'perguntas', component: Perguntas },
  { path: 'bemvindo', component: Bemvindo },
  { path: 'sidebar', component: Sidebar },
  { path: 'profile', component: Profile },
  { path: 'addglicemia', component: Addglicemia},
  { path: 'contarcarboidratos', component: Contarcarboidratos},
  { path: 'carboidratos', component: Carboidratos},
  { path: 'resumorefeicao', component: Resumorefeicao},
  { path: 'alertacarboidratos', component: Alertacarboidratos},
  { path: 'historico', component: Historico},
  { path: 'relatoriosgraficos', component: Relatoriosgraficos},
  { path: 'lembretes', component: Lembretes},
  { path: 'addremedio', component: Addremedio},
  { path: 'addconsulta', component: Addconsulta},
  { path: 'mainremedios', component: Mainremedios},
  { path: 'mainconsultas', component: Mainconsultas},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
