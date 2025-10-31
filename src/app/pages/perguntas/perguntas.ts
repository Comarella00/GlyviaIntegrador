import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Header } from '../../components/header/header';
import { CadastroService } from '../../services/cadastro.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perguntas',
  standalone: true,
  imports: [
    Header,
    FormsModule
  ],
  templateUrl: './perguntas.html',
  styleUrl: './perguntas.css'
})
export class Perguntas {
  nome = '';
  genero = '';
  tipoInsulina = '';
  viaAplicacao = '';
  pesoAtual: number | null = null;
  altura: number | null = null;
  metaGlicemica: number | null = null;
  icr: number | null = null;
  dataNascimento = '';

  constructor(private router: Router, private cadastroService: CadastroService) {}

  navigateGoBack() {
    this.router.navigate(['/bemvindo']);
  }

  salvarPerguntas() {
    // Verifica se o ID do usuário está definido
    if (!this.cadastroService.usuario.idUsuario) {
      alert('ID do usuário não encontrado. Cadastre-se ou faça login primeiro.');
      return;
    }

    // Atualiza os dados no service
    const dados = {
      nome: this.nome,
      genero: this.genero,
      tipoInsulina: this.tipoInsulina,
      viaAplicacao: this.viaAplicacao,
      pesoAtual: this.pesoAtual,
      altura: this.altura,
      metaGlicemica: this.metaGlicemica,
      icr: this.icr,
      dataNascimento: this.dataNascimento
    };
    this.cadastroService.setPerguntas(dados);

    // Faz o POST para o backend usando o ID do usuário
    this.cadastroService.salvarPerguntas().subscribe({
      next: () => {
        alert('Dados salvos com sucesso!');
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Erro ao salvar perguntas:', err);
        alert('Erro ao salvar perguntas!');
      }
    });
  }
}
