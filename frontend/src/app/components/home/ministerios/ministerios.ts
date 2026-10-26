import { Component, computed, DestroyRef, effect, inject, signal } from '@angular/core';
import { Content, MinistryItem } from '../../../services/content';
import { MinistryIcon } from '../../ministerios/ministry-icon';
import { injectIsMobile } from '../is-mobile';

const PAGE_SIZE_DESKTOP = 4;
const PAGE_SIZE_MOBILE = 1;
const AUTOPLAY_MS = 8000;

@Component({
  imports: [MinistryIcon],
  selector: 'app-ministerios',
  styleUrl: './ministerios.scss',
  templateUrl: './ministerios.html',
})
export class Ministerios {
  protected readonly content = inject(Content);
  protected readonly isMobile = injectIsMobile();

  protected readonly pages = computed<MinistryItem[][]>(() => {
    const size = this.isMobile() ? PAGE_SIZE_MOBILE : PAGE_SIZE_DESKTOP;
    const items = this.isMobile()
      ? this.content.ministries.filter((m) => m.featured)
      : this.content.ministries;
    const chunks: MinistryItem[][] = [];
    for (let i = 0; i < items.length; i += size) {
      chunks.push(items.slice(i, i + size));
    }
    return chunks;
  });

  protected readonly currentPage = signal(0);
  private intervalId = setInterval(() => this.advance(), AUTOPLAY_MS);

  constructor() {
    effect(() => {
      this.pages();
      this.currentPage.set(0);
    });
    inject(DestroyRef).onDestroy(() => clearInterval(this.intervalId));
  }

  protected goTo(index: number): void {
    this.currentPage.set(index);
    this.resetAutoplay();
  }

  protected next(): void {
    this.advance();
    this.resetAutoplay();
  }

  protected prev(): void {
    this.currentPage.update((page) => (page - 1 + this.pages().length) % this.pages().length);
    this.resetAutoplay();
  }

  private advance(): void {
    this.currentPage.update((page) => (page + 1) % this.pages().length);
  }

  private resetAutoplay(): void {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => this.advance(), AUTOPLAY_MS);
  }
}
