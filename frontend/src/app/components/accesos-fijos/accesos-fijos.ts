import { Component, inject } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Content } from '../../services/content';

@Component({
  imports: [NgTemplateOutlet, RouterLink],
  selector: 'app-accesos-fijos',
  styleUrl: './accesos-fijos.scss',
  templateUrl: './accesos-fijos.html',
})
export class AccesosFijos {
  private readonly content = inject(Content);

  protected readonly accesos = [
    { key: 'whatsapp', label: 'WhatsApp', href: this.content.whatsappUrl, external: true },
    { key: 'youtube', label: 'YouTube', href: this.content.youtubeChannelUrl, external: true },
    { key: 'ubicacion', label: 'Ubicación', href: this.content.mapsUrl, external: true },
    { key: 'oracion', label: 'Oración', href: '/', external: false },
  ];
}
