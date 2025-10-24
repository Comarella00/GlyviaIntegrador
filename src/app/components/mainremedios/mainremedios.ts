import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mainremedios',
  templateUrl: './mainremedios.html',
  styleUrls: ['./mainremedios.css'] // corrigido
})
export class Mainremedios {
  @Output() adicionar = new EventEmitter<string>();

  adicionarItem() {
    this.adicionar.emit('remedios'); // avisa o parent para abrir AddRemedio
  }

}

