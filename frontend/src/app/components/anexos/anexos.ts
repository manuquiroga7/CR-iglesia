import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Anexo {
  nombre: string;
  descripcion: string;
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
  private readonly sanitizer = inject(DomSanitizer);

  protected readonly anexos: Anexo[] = [
    { nombre: 'Civils y Alianza', descripcion: 'Comunidad de Cristo es la Respuesta en Civils y Alianza.', direccion: 'A definir', horario: 'A definir' },
    { nombre: 'Casarino', descripcion: 'Comunidad de Cristo es la Respuesta en Casarino.', direccion: 'A definir', horario: 'A definir' },
    { nombre: 'Mendoza', descripcion: 'Comunidad de Cristo es la Respuesta en Mendoza.', direccion: 'A definir', horario: 'A definir' },
    { nombre: 'Km 2 y medio', descripcion: 'Comunidad de Cristo es la Respuesta en Km 2 y medio.', direccion: 'A definir', horario: 'A definir' },
    { nombre: 'Pando', descripcion: 'Comunidad de Cristo es la Respuesta en Pando.', direccion: 'A definir', horario: 'A definir' },
    { nombre: 'Casabó', descripcion: 'Comunidad de Cristo es la Respuesta en Casabó.', direccion: 'A definir', horario: 'A definir' },
    { nombre: 'Rivera', descripcion: 'Comunidad de Cristo es la Respuesta en Rivera.', direccion: 'A definir', horario: 'A definir' },
    { nombre: 'Ansina', descripcion: 'Comunidad de Cristo es la Respuesta en Ansina.', direccion: 'A definir', horario: 'A definir' },
    { nombre: 'Barracas, Buenos Aires', descripcion: 'Comunidad de Cristo es la Respuesta en Barracas, Buenos Aires.', direccion: 'A definir', horario: 'A definir' },
    { nombre: 'Cadorna', descripcion: 'Comunidad de Cristo es la Respuesta en Cadorna.', direccion: 'A definir', horario: 'A definir' },
    { nombre: 'La Teja', descripcion: 'Comunidad de Cristo es la Respuesta en La Teja.', direccion: 'A definir', horario: 'A definir' },
    { nombre: 'Durazno', descripcion: 'Comunidad de Cristo es la Respuesta en Durazno.', direccion: 'A definir', horario: 'A definir' },
    { nombre: 'Juan Lacaze', descripcion: 'Comunidad de Cristo es la Respuesta en Juan Lacaze.', direccion: 'A definir', horario: 'A definir' },
    { nombre: 'Penino', descripcion: 'Comunidad de Cristo es la Respuesta en Penino.', direccion: 'A definir', horario: 'A definir' },
  ];

  private mapsQuery(anexo: Anexo): string {
    return anexo.direccion && anexo.direccion !== 'A definir' ? anexo.direccion : `${anexo.nombre}, Uruguay`;
  }

  protected mapsUrl(anexo: Anexo): string {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.mapsQuery(anexo))}`;
  }

  protected mapsEmbedUrl(anexo: Anexo): SafeResourceUrl {
    const url = `https://www.google.com/maps?q=${encodeURIComponent(this.mapsQuery(anexo))}&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
