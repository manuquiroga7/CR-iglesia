import { Component, computed, inject, signal } from '@angular/core';
import { Content, NewsItem } from '../../../services/content';

const PAGE_SIZE = 3;

@Component({
  imports: [],
  selector: 'app-noticias-preview',
  styleUrl: './noticias-preview.scss',
  templateUrl: './noticias-preview.html',
})
export class NoticiasPreview {
  protected readonly content = inject(Content);

  protected readonly pages = computed<NewsItem[][]>(() => {
    const news = this.content.news;
    const chunks: NewsItem[][] = [];
    for (let i = 0; i < news.length; i += PAGE_SIZE) {
      chunks.push(news.slice(i, i + PAGE_SIZE));
    }
    return chunks;
  });

  protected readonly currentPage = signal(0);

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
