import { Component } from '@angular/core';
import { Historia } from './historia/historia';
import { Origenes } from './origenes/origenes';
import { Doctrina } from './doctrina/doctrina';
import { Presente } from './presente/presente';

@Component({
  imports: [Historia, Origenes, Doctrina, Presente],
  selector: 'app-nosotros',
  styleUrl: './nosotros.scss',
  templateUrl: './nosotros.html',
})
export class Nosotros {}
