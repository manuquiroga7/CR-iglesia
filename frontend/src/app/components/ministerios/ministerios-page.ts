import { Component, DestroyRef, effect, HostListener, inject, signal } from '@angular/core';
import { Content, MinistryItem } from '../../services/content';
import { MinistryIcon } from './ministry-icon';

const CLOSE_ANIMATION_MS = 200;

@Component({
  imports: [MinistryIcon],
  selector: 'app-ministerios-page',
  styleUrl: './ministerios-page.scss',
  templateUrl: './ministerios-page.html',
})
export class MinisteriosPage {
  protected readonly content = inject(Content);

  protected readonly selected = signal<MinistryItem | null>(null);
  protected readonly closing = signal(false);
  private closeTimeoutId: ReturnType<typeof setTimeout> | undefined;

  constructor() {
    effect(() => {
      document.body.style.overflow = this.selected() ? 'hidden' : '';
    });
    inject(DestroyRef).onDestroy(() => {
      clearTimeout(this.closeTimeoutId);
      document.body.style.overflow = '';
    });
  }

  protected open(item: MinistryItem): void {
    this.selected.set(item);
  }

  @HostListener('document:keydown.escape')
  protected close(): void {
    if (!this.selected() || this.closing()) return;
    this.closing.set(true);
    this.closeTimeoutId = setTimeout(() => {
      this.selected.set(null);
      this.closing.set(false);
    }, CLOSE_ANIMATION_MS);
  }
}
