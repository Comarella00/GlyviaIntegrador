import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-carboidratos',
  imports: [],
  templateUrl: './carboidratos.html',
  styleUrl: './carboidratos.css'
})
export class Carboidratos {
  @Output() fotoProcessada = new EventEmitter<number>();

  processarFoto(event: any) {
    // Chanar a API para calcular carboidratos
    const carboQuantia = 45; // valor de exemplo
    this.fotoProcessada.emit(carboQuantia);
  }
}
