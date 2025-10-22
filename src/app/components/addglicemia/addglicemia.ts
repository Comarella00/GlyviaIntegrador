import { Component } from '@angular/core';
import {Header} from '../header/header';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addglicemia',
  imports: [
    Header
  ],
  templateUrl: './addglicemia.html',
  styleUrl: './addglicemia.css'
})
export class Addglicemia {
  constructor(private router: Router) {}

}
