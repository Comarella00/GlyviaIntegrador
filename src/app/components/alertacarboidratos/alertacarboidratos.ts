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
  temaAtual: 'light' | 'dark' = 'light';

  ngOnInit() {
    // Detecta o tema salvo no localStorage ou o padrão do body
    this.temaAtual = (localStorage.getItem('theme') as 'light' | 'dark') ||
      (document.body.classList.contains('dark-theme') ? 'dark' : 'light');
  }

  fecharAlerta() {
    this.fechar.emit();
  }
}
