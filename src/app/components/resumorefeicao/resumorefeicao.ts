import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Alertacarboidratos} from '../alertacarboidratos/alertacarboidratos';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-resumorefeicao',
  templateUrl: './resumorefeicao.html',
  imports: [
    CommonModule,
    Alertacarboidratos
  ],
  styleUrls: ['./resumorefeicao.css']
})
export class Resumorefeicao {
  constructor(private router: Router) {}

  @Input() foto!: string;
  @Output() reenviarImagem = new EventEmitter<void>();

  mostrarAlerta = false;

  navigateAlertacarboidratos() {
    this.router.navigate(['/alertacarboidratos']);
  }

  reenviar() {
    this.reenviarImagem.emit();
  }

  abrirAlerta() {
    this.mostrarAlerta = true;
  }

  fecharAlerta() {
    this.mostrarAlerta = false;
  }
}
