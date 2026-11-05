import { Component, inject, OnDestroy, signal } from '@angular/core';
import { Content } from '../../../services/content';

const AUTOPLAY_MS = 12000;
const SWIPE_THRESHOLD_PX = 40;

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero implements OnDestroy {
  private readonly content = inject(Content);
  protected readonly slides = [0, 1];
  protected readonly quickAccess = [
    { key: 'horarios', label: 'Horarios', href: '#horarios', external: false },
    { key: 'ubicacion', label: 'Ubicación', href: this.content.mapsUrl, external: true },
    { key: 'whatsapp', label: 'WhatsApp', href: this.content.whatsappUrl, external: true },
    { key: 'youtube', label: 'YouTube', href: this.content.youtubeChannelUrl, external: true },
    { key: 'oracion', label: 'Oración', href: '/#oracion', external: false },
  ];
  protected readonly current = signal(0);
  private intervalId = setInterval(() => this.advance(), AUTOPLAY_MS);
  private dragStartX: number | null = null;

  onPointerDown(event: PointerEvent): void {
    this.dragStartX = event.clientX;
  }

  onPointerUp(event: PointerEvent): void {
    if (this.dragStartX === null) return;
    const deltaX = event.clientX - this.dragStartX;
    this.dragStartX = null;

    if (Math.abs(deltaX) < SWIPE_THRESHOLD_PX) return;
    if (deltaX < 0) {
      this.next();
    } else {
      this.prev();
    }
  }

  goTo(index: number): void {
    this.current.set(index);
    this.resetAutoplay();
  }

  next(): void {
    this.advance();
    this.resetAutoplay();
  }

  prev(): void {
    this.current.set((this.current() - 1 + this.slides.length) % this.slides.length);
    this.resetAutoplay();
  }

  private advance(): void {
    this.current.set((this.current() + 1) % this.slides.length);
  }

  private resetAutoplay(): void {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => this.advance(), AUTOPLAY_MS);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
