import { Component } from '@angular/core';
import {Header} from '../../components/header/header';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-relatoriosgraficos',
  standalone: true,
  imports: [
    Header,
    NgStyle
  ],
  templateUrl: './relatoriosgraficos.html',
  styleUrl: './relatoriosgraficos.css'
})
export class Relatoriosgraficos {
  toggleAtivo: string = 'relatorio';

  setToggle(valor: string) {
    this.toggleAtivo = valor;
  }
}
