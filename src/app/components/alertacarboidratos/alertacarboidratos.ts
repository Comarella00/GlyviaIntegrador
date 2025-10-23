import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alertacarboidratos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alertacarboidratos.html',
  styleUrls: ['./alertacarboidratos.css']
})
export class Alertacarboidratos {
  @Input() mensagem!: string;
  @Output() fechar = new EventEmitter<void>();

  fecharAlerta() {
    this.fechar.emit();
  }
}
