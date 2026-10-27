import { Component, HostListener, signal } from '@angular/core';

const SHOW_AFTER_PX = 400;

@Component({
  imports: [],
  selector: 'app-scroll-top',
  styleUrl: './scroll-top.scss',
  templateUrl: './scroll-top.html',
})
export class ScrollTop {
  protected readonly visible = signal(window.scrollY > SHOW_AFTER_PX);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.visible.set(window.scrollY > SHOW_AFTER_PX);
  }

  protected scrollToTop(): void {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  }
}
