import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Alimento {
  nome: string;
  calorias: number;
  carboidratos: number;
}

@Component({
  selector: 'app-lista-alimentos-refeicao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-alimentos-refeicao.html',
  styleUrls: ['./lista-alimentos-refeicao.css']
})
export class ListaAlimentosRefeicao {

  @Input() alimentos: Alimento[] = [];
  @Output() remover = new EventEmitter<number>();

  get totalCalorias() {
    return this.alimentos.reduce((acc, item) => acc + item.calorias, 0);
  }

  get totalCarboidratos() {
    return this.alimentos.reduce((acc, item) => acc + item.carboidratos, 0);
  }

  removerAlimento(index: number) {
    this.remover.emit(index);
  }
}
