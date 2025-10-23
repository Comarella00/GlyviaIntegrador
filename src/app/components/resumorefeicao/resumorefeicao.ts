import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resumorefeicao',
  templateUrl: './resumorefeicao.html',
  styleUrls: ['./resumorefeicao.css']
})
export class Resumorefeicao {
  constructor(private router: Router) {}

  @Input() foto!: string;
  @Output() reenviarImagem = new EventEmitter<void>();

  navigateAlertacarboidratos() {
    this.router.navigate(['/alertacarboidratos']);
  }

  reenviar() {
    this.reenviarImagem.emit();
  }
}
