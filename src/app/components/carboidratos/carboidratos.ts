import { Component, EventEmitter, Output } from '@angular/core';
import {Header} from '../header/header';

@Component({
  selector: 'app-carboidratos',
  templateUrl: './carboidratos.html',
  standalone: true,
  imports: [
    Header
  ],
  styleUrls: ['./carboidratos.css']
})
export class Carboidratos {
  @Output() fotoProcessada = new EventEmitter<string>(); // emitir a foto em base64

  processarFoto(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    // Verifica se é jpg/jpeg
    if (!file.type.includes('jpeg') && !file.type.includes('jpg')) {
      alert('Apenas arquivos JPG ou JPEG são permitidos!');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      // Emite a foto em base64 para o componente pai
      this.fotoProcessada.emit(reader.result as string);
    };
    reader.readAsDataURL(file);
  }
}
