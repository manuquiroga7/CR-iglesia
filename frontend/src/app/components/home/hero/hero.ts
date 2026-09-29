import { Component, OnDestroy, signal } from '@angular/core';

const AUTOPLAY_MS = 12000;

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero implements OnDestroy {
  protected readonly slides = [0, 1];
  protected readonly current = signal(0);
  private intervalId = setInterval(() => this.advance(), AUTOPLAY_MS);

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
