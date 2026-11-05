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
    `https://www.youtube-nocookie.com/embed/${this.content.latestMessageVideoId}?rel=0`,
  );

  protected get replayPrograms() {
    return this.content.huellaPrograms.filter((p) => p.videoId);
  }
}
