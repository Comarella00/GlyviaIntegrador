import { Component, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resumorefeicao',
  templateUrl: './resumorefeicao.html',
  styleUrls: ['./resumorefeicao.css']
})
export class Resumorefeicao {
  constructor(private router: Router) {}

  @Input() foto!: string;

  navigateAlertacarboidratos() {
    this.router.navigate(['/alertacarboidratos']);
  }
}
