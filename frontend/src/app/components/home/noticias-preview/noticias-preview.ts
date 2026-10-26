import { Component, computed, DestroyRef, effect, inject, signal } from '@angular/core';
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
