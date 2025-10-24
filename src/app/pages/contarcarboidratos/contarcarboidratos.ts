import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carboidratos } from '../../components/carboidratos/carboidratos';
import { Resumorefeicao } from '../../components/resumorefeicao/resumorefeicao';
import { Alertacarboidratos } from '../../components/alertacarboidratos/alertacarboidratos';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-contarcarboidratos',
  standalone: true,
  imports: [CommonModule, Header, Carboidratos, Resumorefeicao, Alertacarboidratos],
  templateUrl: './contarcarboidratos.html',
  styleUrls: ['./contarcarboidratos.css']
})
export class Contarcarboidratos {
  fotoProcessada: string | null = null;

  onFotoProcessada(fotoBase64: string) {
    this.fotoProcessada = fotoBase64;
  }

  onReenviarImagem() {
    this.fotoProcessada = null;
  }

}
