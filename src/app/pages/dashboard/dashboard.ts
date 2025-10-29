import { Component } from '@angular/core';
import {Header} from '../../components/header/header';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    Header

  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})

export class Dashboard {

  ultimaGlicemia = { valor: 110, horario: '08:30h' };
  mediaDiaria = 150;
  proximaInsulina = '14:00';
  statusRapido = true;

  alertas = [
    'Medicação atrasada',
    'Hipoglicemia detectada',
    'Exame marcado'
  ];

  porcentagemIdeal = 75;
}
