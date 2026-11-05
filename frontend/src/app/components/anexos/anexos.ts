import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AnexoItem, Content } from '../../services/content';

@Component({
  imports: [],
  selector: 'app-anexos',
  styleUrl: './anexos.scss',
  templateUrl: './anexos.html',
})
export class Anexos {
  private readonly sanitizer = inject(DomSanitizer);

  protected readonly anexos = inject(Content).anexos;

  private mapsQuery(anexo: AnexoItem): string {
    return anexo.direccion && anexo.direccion !== 'A definir' ? anexo.direccion : `${anexo.nombre}, Uruguay`;
  }

  protected mapsEmbedUrl(anexo: AnexoItem): SafeResourceUrl {
    const url = `https://www.google.com/maps?q=${encodeURIComponent(this.mapsQuery(anexo))}&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
