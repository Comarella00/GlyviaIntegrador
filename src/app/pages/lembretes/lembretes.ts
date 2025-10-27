import { Component } from '@angular/core';
import {Header} from '../../components/header/header';
import {Mainremedios} from '../../components/mainremedios/mainremedios';
import {Mainconsultas} from '../../components/mainconsultas/mainconsultas';
import {Addremedio} from '../../components/addremedio/addremedio';
import {Addconsulta} from '../../components/addconsulta/addconsulta';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-lembretes',
  templateUrl: './lembretes.html',
  standalone: true,
  imports: [
    Header,
    CommonModule,
    Mainremedios,
    Mainconsultas,
    Addremedio,
    Addconsulta
  ],
  styleUrls: ['./lembretes.css']
})
export class Lembretes {
  telaAtiva: string = 'principal'; // começa mostrando os cards principais

  // muda para a tela de adicionar conforme o tipo
  goToAdd(tipo: string) {
    if (tipo === 'remedio') {
      this.telaAtiva = 'addRemedio';
    } else if (tipo === 'consulta') {
      this.telaAtiva = 'addConsulta';
    }
  }

  voltar() {
    this.telaAtiva = 'principal';
  }
}
