import { Component, DestroyRef, effect, HostListener, inject, signal } from '@angular/core';
import { ActivityItem, Content } from '../../services/content';
import { MinistryIcon } from '../ministerios/ministry-icon';

const CLOSE_ANIMATION_MS = 200;

@Component({
  imports: [MinistryIcon],
  selector: 'app-actividades-page',
  styleUrl: './actividades-page.scss',
  templateUrl: './actividades-page.html',
})
export class ActividadesPage {
  protected readonly content = inject(Content);

  protected readonly selected = signal<ActivityItem | null>(null);
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

  protected open(item: ActivityItem): void {
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
