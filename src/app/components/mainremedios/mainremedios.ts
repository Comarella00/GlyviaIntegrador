import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mainremedios',
  standalone: true,
  templateUrl: './mainremedios.html',
  styleUrls: ['./mainremedios.css'] // corrigido
})
export class Mainremedios {
  @Output() adicionar = new EventEmitter<void>();

  checked = false;

  onAdicionar() {
    this.adicionar.emit(); // emite evento pro componente pai (Lembretes)
  }

  toggleCheckBox() {
    this.checked = !this.checked;
  }
}

