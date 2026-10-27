import { Component, DestroyRef, ElementRef, afterNextRender, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

const VIDEO_ID = 'fTDnttICzTQ';
const EMBED_URL = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}`;
// Los navegadores solo permiten autoplay si el video arranca silenciado.
const AUTOPLAY_URL = `${EMBED_URL}?autoplay=1&mute=1&playsinline=1`;

@Component({
  imports: [],
  selector: 'app-video',
  styleUrl: './video.scss',
  templateUrl: './video.html',
})
export class Video {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly destroyRef = inject(DestroyRef);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  private readonly idleUrl = this.sanitizer.bypassSecurityTrustResourceUrl(EMBED_URL);
  private readonly playingUrl = this.sanitizer.bypassSecurityTrustResourceUrl(AUTOPLAY_URL);

  protected readonly src = signal<SafeResourceUrl>(this.idleUrl);

  constructor() {
    afterNextRender(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          this.src.set(this.playingUrl);
          observer.disconnect();
        },
        { threshold: 0.5 },
      );
      observer.observe(this.host.nativeElement);
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
