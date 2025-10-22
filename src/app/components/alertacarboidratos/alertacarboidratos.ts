import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alertacarboidratos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alertacarboidratos.html',
  styleUrls: ['./alertacarboidratos.css']
})
export class Alertacarboidratos {
  show = false;
  mensagem = "Aviso";

  abrir() {
    this.show = true;
  }

  fechar(){
    this.show = false;
  }
}
