import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-mainconsultas',
  imports: [],
  standalone: true,
  templateUrl: './mainconsultas.html',
  styleUrl: './mainconsultas.css'
})
export class Mainconsultas {
  @Output() adicionar = new EventEmitter<string>();

  adicionarItem() {
    this.adicionar.emit('consulta'); // avisa o parent para abrir AddConsulta
  }
}
