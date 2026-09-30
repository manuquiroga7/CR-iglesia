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
    { nombre: 'Civils y Alianza', direccion: 'A definir', horario: 'A definir' },
    { nombre: 'Casarino', direccion: 'A definir', horario: 'A definir' },
    { nombre: 'Mendoza', direccion: 'A definir', horario: 'A definir' },
    { nombre: 'Km 2 y medio', direccion: 'A definir', horario: 'A definir' },
    { nombre: 'Pando', direccion: 'A definir', horario: 'A definir' },
    { nombre: 'Casabó', direccion: 'A definir', horario: 'A definir' },
    { nombre: 'Rivera', direccion: 'A definir', horario: 'A definir' },
    { nombre: 'Ansina', direccion: 'A definir', horario: 'A definir' },
    { nombre: 'Barracas, Buenos Aires', direccion: 'A definir', horario: 'A definir' },
    { nombre: 'Cadorna', direccion: 'A definir', horario: 'A definir' },
    { nombre: 'La Teja', direccion: 'A definir', horario: 'A definir' },
    { nombre: 'Durazno', direccion: 'A definir', horario: 'A definir' },
    { nombre: 'Juan Lacaze', direccion: 'A definir', horario: 'A definir' },
    { nombre: 'Penino', direccion: 'A definir', horario: 'A definir' },
  ];
}
