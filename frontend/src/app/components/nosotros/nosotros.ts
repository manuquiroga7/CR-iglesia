import { Component } from '@angular/core';
import { Historia } from './historia/historia';
import { Doctrina } from './doctrina/doctrina';
import { VisionMision } from './vision-mision/vision-mision';
import { Liderazgo } from './liderazgo/liderazgo';
import { PrimeraVez } from './primera-vez/primera-vez';

@Component({
  imports: [Historia, Doctrina, VisionMision, Liderazgo, PrimeraVez],
  selector: 'app-nosotros',
  styleUrl: './nosotros.scss',
  templateUrl: './nosotros.html',
})
export class Nosotros {}
