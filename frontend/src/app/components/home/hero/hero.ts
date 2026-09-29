import { Component, OnDestroy, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero implements OnDestroy {
  protected readonly slides = [0, 1];
  protected readonly current = signal(0);
  private readonly intervalId = setInterval(() => this.next(), 8000);

  goTo(index: number): void {
    this.current.set(index);
  }

  next(): void {
    this.current.set((this.current() + 1) % this.slides.length);
  }

  prev(): void {
    this.current.set((this.current() - 1 + this.slides.length) % this.slides.length);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
