import { Component, inject, signal } from '@angular/core';
import { Content } from '../../../services/content';
import { MinistryIcon } from '../../ministerios/ministry-icon';
import { injectIsMobile } from '../is-mobile';

@Component({
  imports: [MinistryIcon],
  selector: 'app-ministerios',
  styleUrl: './ministerios.scss',
  templateUrl: './ministerios.html',
})
export class Ministerios {
  protected readonly content = inject(Content);
  protected readonly isMobile = injectIsMobile();
  protected readonly currentIndex = signal(0);

  protected goTo(index: number): void {
    this.currentIndex.set(index);
  }

  protected next(): void {
    this.currentIndex.update((i) => (i + 1) % this.content.featuredMinistries.length);
  }

  protected prev(): void {
    const total = this.content.featuredMinistries.length;
    this.currentIndex.update((i) => (i - 1 + total) % total);
  }
}
