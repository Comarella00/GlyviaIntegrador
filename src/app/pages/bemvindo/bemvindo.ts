import { Component } from '@angular/core';
import {Header} from "../../components/header/header";
import {Router} from '@angular/router';

@Component({
  selector: 'app-bemvindo',
    imports: [
        Header
    ],
  templateUrl: './bemvindo.html',
  styleUrl: './bemvindo.css'
})
export class Bemvindo {
  constructor(private router: Router) {}

  navigatePerguntas() {
    this.router.navigate(['/perguntas']);
  }
}
