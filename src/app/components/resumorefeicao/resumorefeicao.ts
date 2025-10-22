import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resumorefeicao',
  imports: [],
  templateUrl: './resumorefeicao.html',
  styleUrl: './resumorefeicao.css'
})
export class Resumorefeicao {
  constructor(private router: Router) {}

  navigateAlertacarboidratos() {
    this.router.navigate(['/alertacarboidratos']);
  }
}
