import { Component, computed, DestroyRef, effect, inject, signal } from '@angular/core';
import { Content, NewsItem } from '../../../services/content';

const PAGE_SIZE_DESKTOP = 3;
const PAGE_SIZE_MOBILE = 1;
const MOBILE_QUERY = '(max-width: 639px)';

@Component({
  imports: [],
  selector: 'app-noticias-preview',
  styleUrl: './noticias-preview.scss',
  templateUrl: './noticias-preview.html',
})
export class NoticiasPreview {
  protected readonly content = inject(Content);

  private readonly isMobile = signal(false);

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
    const mql = window.matchMedia(MOBILE_QUERY);
    this.isMobile.set(mql.matches);
    const update = () => this.isMobile.set(mql.matches);
    mql.addEventListener('change', update);
    window.addEventListener('resize', update);
    inject(DestroyRef).onDestroy(() => {
      mql.removeEventListener('change', update);
      window.removeEventListener('resize', update);
    });

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
