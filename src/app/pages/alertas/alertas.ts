import { Component } from '@angular/core';
import {Header} from '../../components/header/header';
import {Alertaslembretes} from '../../components/alertaslembretes/alertaslembretes';

@Component({
  selector: 'app-alertas',
  standalone: true,
  imports: [
    Header,
    Alertaslembretes
  ],
  templateUrl: './alertas.html',
  styleUrl: './alertas.css'
})
export class Alertas {

}
