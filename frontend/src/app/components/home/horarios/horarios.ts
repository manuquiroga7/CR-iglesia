import { Component, DestroyRef, effect, HostListener, inject, signal } from '@angular/core';
import { Content } from '../../../services/content';

const CLOSE_ANIMATION_MS = 200;

@Component({
  imports: [],
  selector: 'app-horarios',
  styleUrl: './horarios.scss',
  templateUrl: './horarios.html',
})
export class Horarios {
  protected readonly content = inject(Content);

  protected readonly modalOpen = signal(false);
  protected readonly closing = signal(false);
  private closeTimeoutId: ReturnType<typeof setTimeout> | undefined;

  protected get scheduledPrograms() {
    return this.content.huellaPrograms.filter((p) => p.schedule);
  }

  constructor() {
    effect(() => {
      document.body.style.overflow = this.modalOpen() ? 'hidden' : '';
    });
    inject(DestroyRef).onDestroy(() => {
      clearTimeout(this.closeTimeoutId);
      document.body.style.overflow = '';
    });
  }

  protected open(): void {
    this.modalOpen.set(true);
  }

  @HostListener('document:keydown.escape')
  protected close(): void {
    if (!this.modalOpen() || this.closing()) return;
    this.closing.set(true);
    this.closeTimeoutId = setTimeout(() => {
      this.modalOpen.set(false);
      this.closing.set(false);
    }, CLOSE_ANIMATION_MS);
  }
}
