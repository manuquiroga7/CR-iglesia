import { Component, computed, DestroyRef, effect, HostListener, inject, signal } from '@angular/core';
import { Content, NewsItem } from '../../../services/content';
import { injectIsMobile } from '../is-mobile';

const PAGE_SIZE_DESKTOP = 3;
const PAGE_SIZE_MOBILE = 1;
const AUTOPLAY_MS = 15000;

@Component({
  imports: [],
  selector: 'app-noticias-preview',
  styleUrl: './noticias-preview.scss',
  templateUrl: './noticias-preview.html',
})
export class NoticiasPreview {
  protected readonly content = inject(Content);

  private readonly isMobile = injectIsMobile();

  protected readonly pages = computed<NewsItem[][]>(() => {
    const size = this.isMobile() ? PAGE_SIZE_MOBILE : PAGE_SIZE_DESKTOP;
    const news = this.content.news;
    const chunks: NewsItem[][] = [];
    for (let i = 0; i < news.length; i += size) {
      chunks.push(news.slice(i, i + size));
    }
    return chunks;
  });

  protected readonly currentPage = signal(0);
  protected readonly selected = signal<NewsItem | null>(null);
  private intervalId = setInterval(() => this.advance(), AUTOPLAY_MS);

  constructor() {
    effect(() => {
      this.pages();
      this.currentPage.set(0);
    });
    effect(() => {
      document.body.style.overflow = this.selected() ? 'hidden' : '';
    });
    inject(DestroyRef).onDestroy(() => {
      clearInterval(this.intervalId);
      document.body.style.overflow = '';
    });
  }

  protected open(item: NewsItem): void {
    clearInterval(this.intervalId);
    this.selected.set(item);
  }

  @HostListener('document:keydown.escape')
  protected close(): void {
    if (!this.selected()) return;
    this.selected.set(null);
    this.resetAutoplay();
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
