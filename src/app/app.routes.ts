import { RouterModule, Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Cadastro } from './components/cadastro/cadastro';
import { Dashboard } from './components/dashboard/dashboard';
import { NgModule } from '@angular/core';
import { Bemvindo } from './components/bemvindo/bemvindo';
import {Perguntas} from './components/perguntas/perguntas';
import {Sidebar} from './components/sidebar/sidebar';
import {Profile} from './components/profile/profile';
import {Addglicemia} from './components/addglicemia/addglicemia';
import {Contarcarboidratos} from './components/contarcarboidratos/contarcarboidratos';
import {Carboidratos} from './components/carboidratos/carboidratos';
import {Resumorefeicao} from './components/resumorefeicao/resumorefeicao';
import {Alertacarboidratos} from './components/alertacarboidratos/alertacarboidratos';

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
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
