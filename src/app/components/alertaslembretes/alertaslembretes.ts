import { Component } from '@angular/core';

@Component({
  selector: 'app-alertaslembretes',
  imports: [],
  templateUrl: './alertaslembretes.html',
  styleUrl: './alertaslembretes.css'
})
export class Alertaslembretes {
  active: 'remedios' | 'consultas' | null = null;

  setActive(option: 'remedios' | 'consultas') {
    if (this.active === option) {
      this.active = null;
    } else {
      this.active = option;
    }
  }
}
