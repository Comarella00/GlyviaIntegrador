import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-addremedio',
  imports: [
    FormsModule
  ],
  templateUrl: './addremedio.html',
  styleUrl: './addremedio.css'
})
export class Addremedio {
  @Output() adicionar = new EventEmitter<void>();
  @Output() voltar = new EventEmitter<void>();

  descricao: string = '';
  hora: string = '';

  dias = [
    { nome: 'Seg', checked: false },
    { nome: 'Ter', checked: false },
    { nome: 'Qua', checked: false },
    { nome: 'Qui', checked: false },
    { nome: 'Sex', checked: false },
    { nome: 'Sáb', checked: false },
    { nome: 'Dom', checked: false },
  ];

  toggleDia(index: number) {
    this.dias[index].checked = !this.dias[index].checked;
  }

  adicionarRemedio() {
    if (!this.descricao || !this.hora) {
      alert('Preencha a descrição e a hora do remédio.');
      return;
    }

    const diasSelecionados = this.dias
      .filter(d => d.checked)
      .map(d => d.nome);

    console.log('Novo Remédio:', {
      descricao: this.descricao,
      hora: this.hora,
      dias: diasSelecionados
    });

    // Aqui você pode emitir um evento para o parent ou salvar em serviço
    this.adicionar.emit();

    // Resetar formulário
    this.descricao = '';
    this.hora = '';
    this.dias.forEach(d => d.checked = false);
  }

  voltarTela() {
    this.voltar.emit();
  }
}
