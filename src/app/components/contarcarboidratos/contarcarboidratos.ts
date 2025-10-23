import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carboidratos } from '../carboidratos/carboidratos';
import { Resumorefeicao } from '../resumorefeicao/resumorefeicao';
import { Alertacarboidratos } from '../alertacarboidratos/alertacarboidratos';
import { Header } from '../header/header';

@Component({
  selector: 'app-contarcarboidratos',
  standalone: true,
  imports: [CommonModule, Header, Carboidratos, Resumorefeicao, Alertacarboidratos],
  templateUrl: './contarcarboidratos.html',
  styleUrls: ['./contarcarboidratos.css']
})
export class Contarcarboidratos {
  fotoProcessada: string | null = null;

  onFotoProcessada(foto: string) {
    this.fotoProcessada = foto;
  }
}
