import { RouterModule, Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Cadastro } from './components/cadastro/cadastro';
import { Dashboard } from './components/dashboard/dashboard';
import { NgModule } from '@angular/core';
import { Bemvindo } from './components/bemvindo/bemvindo';
import {Perguntas} from './components/perguntas/perguntas';
import {Sidebar} from './components/sidebar/sidebar';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'cadastro', component: Cadastro },
  { path: 'dashboard', component: Dashboard },
  { path: 'login', component: Login },
  { path: 'perguntas', component: Perguntas },
  { path: 'bemvindo', component: Bemvindo },
  { path: 'sidebar', component: Sidebar },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
