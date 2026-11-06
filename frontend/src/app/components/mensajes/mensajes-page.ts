import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Content } from '../../services/content';

@Component({
  imports: [],
  selector: 'app-mensajes-page',
  styleUrl: './mensajes-page.scss',
  templateUrl: './mensajes-page.html',
})
export class MensajesPage {
  protected readonly content = inject(Content);

  protected readonly latestSrc = inject(DomSanitizer).bypassSecurityTrustResourceUrl(
    // Arranca solo desde el minuto 5. El autoplay del navegador exige que el video empiece silenciado.
    `https://www.youtube-nocookie.com/embed/${this.content.latestMessageVideoId}?rel=0&start=300&autoplay=1&mute=1&playsinline=1`,
  );

  protected get replayPrograms() {
    return this.content.huellaPrograms.filter((p) => p.videoId);
  }
}
