import { Component , OnInit} from '@angular/core';
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
export class Contarcarboidratos implements OnInit {
  fotoProcessada: string | null = null;
  mostrarAlerta = false;

  ngOnInit() {
    // Exibe o pop-up automaticamente ao abrir
    this.mostrarAlerta = true;
  }

  onFotoProcessada(fotoBase64: string) {
    this.fotoProcessada = fotoBase64;
  }

  onReenviarImagem() {
    this.fotoProcessada = null;
  }

  fecharAlerta() {
    this.mostrarAlerta = false;
  }
}
