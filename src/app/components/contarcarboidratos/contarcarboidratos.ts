import { Component } from '@angular/core';
import {Header} from '../header/header';
import {Carboidratos} from '../carboidratos/carboidratos';
import {Resumorefeicao} from '../resumorefeicao/resumorefeicao';

@Component({
  selector: 'app-contarcarboidratos',
  imports: [
    Header,
    Carboidratos,
    Resumorefeicao
  ],
  templateUrl: './contarcarboidratos.html',
  styleUrl: './contarcarboidratos.css'
})
export class Contarcarboidratos {
  showResumo = false;
  carboData: number | null = null;

  onFotoProcessada(carbo: number) {
    this.carboData = carbo;
    this.showResumo = true;
  }

}

