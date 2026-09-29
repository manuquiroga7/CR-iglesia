import { Component } from '@angular/core';

interface Anexo {
  nombre: string;
  direccion: string;
  horario: string;
}

@Component({
  imports: [],
  selector: 'app-anexos',
  styleUrl: './anexos.scss',
  templateUrl: './anexos.html',
})
export class Anexos {
  protected readonly anexos: Anexo[] = [
    { nombre: 'Anexo Malvín', direccion: 'A definir', horario: 'A definir' },
    { nombre: 'Anexo Cerro', direccion: 'A definir', horario: 'A definir' },
    { nombre: 'Anexo Paso de la Arena', direccion: 'A definir', horario: 'A definir' },
  ];
}
