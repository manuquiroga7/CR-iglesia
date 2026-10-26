import { Component, computed, effect, inject, signal } from '@angular/core';
import { Content, NewsItem } from '../../../services/content';
import { injectIsMobile } from '../is-mobile';

const PAGE_SIZE_DESKTOP = 3;
const PAGE_SIZE_MOBILE = 1;

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

  constructor() {
    effect(() => {
      this.pages();
      this.currentPage.set(0);
    });
  }

  protected goTo(index: number): void {
    this.currentPage.set(index);
  }

  protected next(): void {
    this.currentPage.update((page) => (page + 1) % this.pages().length);
  }

  protected prev(): void {
    this.currentPage.update((page) => (page - 1 + this.pages().length) % this.pages().length);
  }
}
