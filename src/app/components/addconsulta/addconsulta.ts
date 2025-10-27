import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-addconsulta',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addconsulta.html',
  styleUrls: ['./addconsulta.css']
})
export class Addconsulta {
  @Output() adicionar = new EventEmitter<void>();
  @Output() voltar = new EventEmitter<void>();

  descricao = '';
  data = '';
  hora = '';

  adicionarConsulta() {
    if (!this.descricao || !this.data || !this.hora) {
      alert('Preencha todos os campos da consulta.');
      return;
    }

    console.log('Nova Consulta:', {
      descricao: this.descricao,
      data: this.data,
      hora: this.hora
    });

    this.adicionar.emit();
    this.resetarFormulario();
  }

  voltarTela() {
    this.voltar.emit();
  }

  private resetarFormulario() {
    this.descricao = '';
    this.data = '';
    this.hora = '';
  }
}
