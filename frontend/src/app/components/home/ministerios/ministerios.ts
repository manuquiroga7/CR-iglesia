import { Component, computed, effect, inject, signal } from '@angular/core';
import { Content, MinistryItem } from '../../../services/content';
import { MinistryIcon } from '../../ministerios/ministry-icon';
import { injectIsMobile } from '../is-mobile';

const PAGE_SIZE_DESKTOP = 4;
const PAGE_SIZE_MOBILE = 1;

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
    const items = this.content.ministries;
    const chunks: MinistryItem[][] = [];
    for (let i = 0; i < items.length; i += size) {
      chunks.push(items.slice(i, i + size));
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
