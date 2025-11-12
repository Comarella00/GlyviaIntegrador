import { Component } from '@angular/core';
import { AddcarbomanualService } from '../../services/addcarbomanual.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-addcarbomanualmente',
  templateUrl: './addcarbomanualmente.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./addcarbomanualmente.css']
})
export class Addcarbomanualmente {
  form = {
    descricao: '',
    calorias: 0,
    carboidratos: 0,
    insulina: 0,
    dataRefeicao: '',
    horaRefeicao: ''
  };

  constructor(private refeicaoService: AddcarbomanualService) {}

  adicionarRefeicao() {
    // Garante formato compatível com backend
    const dados = {
      ...this.form,
      // garante que a hora seja enviada no formato HH:mm:ss
      horaRefeicao: this.form.horaRefeicao ? this.form.horaRefeicao + ':00' : null
    };

    this.refeicaoService.adicionarRefeicao(dados).subscribe({
      next: (res) => {
        console.log('Refeição adicionada:', res);
        alert('Refeição adicionada com sucesso!');
      },
      error: (err) => {
        console.error('Erro ao adicionar refeição:', err);
        alert('Erro ao adicionar refeição. Verifique os campos.');
      }
    });
  }

}
