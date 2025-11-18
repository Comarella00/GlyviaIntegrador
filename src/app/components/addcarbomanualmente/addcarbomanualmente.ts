import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addcarbomanualmente',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './addcarbomanualmente.html',
  styleUrls: ['./addcarbomanualmente.css']
})
export class Addcarbomanualmente {

  nome: string = '';
  carboidratos: number = 0;
  calorias: number = 0;

  alimentos: any[] = [];

  adicionar() {
    if (!this.nome || this.carboidratos < 0 || this.calorias < 0) return;

    this.alimentos.push({
      nome: this.nome,
      carboidratos: this.carboidratos,
      calorias: this.calorias
    });

    this.nome = '';
    this.carboidratos = 0;
    this.calorias = 0;
  }

  remover(index: number) {
    this.alimentos.splice(index, 1);
  }

  totalCarboidratos() {
    return this.alimentos.reduce((sum, item) => sum + item.carboidratos, 0);
  }

  totalCalorias() {
    return this.alimentos.reduce((sum, item) => sum + item.calorias, 0);
  }
}
