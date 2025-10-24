import { Component } from '@angular/core';
import {Header} from '../../components/header/header';
import {Mainremedios} from '../../components/mainremedios/mainremedios';
import {Mainconsultas} from '../../components/mainconsultas/mainconsultas';
import {Addremedio} from '../../components/addremedio/addremedio';
import {Addconsulta} from '../../components/addconsulta/addconsulta';

@Component({
  selector: 'app-lembretes',
  templateUrl: './lembretes.html',
  imports: [
    Header,
    Mainremedios,
    Mainconsultas,
    Addremedio,
    Addconsulta
  ],
  styleUrls: ['./lembretes.css']
})
export class Lembretes {
  telaAtiva: 'principal' | 'addRemedio' | 'addConsulta' = 'principal';

  goToAdd(tipo: string) {
    if (tipo === 'remedios') this.telaAtiva = 'addRemedio';
    if (tipo === 'consultas') this.telaAtiva = 'addConsulta';
  }
}
