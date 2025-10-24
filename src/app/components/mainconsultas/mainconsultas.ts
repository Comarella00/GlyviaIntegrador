import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mainconsultas',
  imports: [],
  templateUrl: './mainconsultas.html',
  styleUrl: './mainconsultas.css'
})
export class Mainconsultas {
  @Output() adicionar = new EventEmitter<string>();

  adicionarItem() {
    this.adicionar.emit('consultas'); // avisa o parent para abrir AddConsulta
  }
}
