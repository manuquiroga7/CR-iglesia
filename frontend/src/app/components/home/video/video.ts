import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

const VIDEO_ID = 'fTDnttICzTQ';
const START_SECONDS = 5 * 60;
// Los navegadores solo permiten autoplay si el video arranca silenciado.
const EMBED_URL = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?start=${START_SECONDS}&autoplay=1&mute=1&playsinline=1`;

@Component({
  imports: [],
  selector: 'app-video',
  styleUrl: './video.scss',
  templateUrl: './video.html',
})
export class Video {
  protected readonly src = inject(DomSanitizer).bypassSecurityTrustResourceUrl(EMBED_URL);
}
