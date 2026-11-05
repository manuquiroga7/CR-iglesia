import { Component, computed, DestroyRef, effect, HostListener, inject, signal } from '@angular/core';
import { Content, GalleryItem } from '../../services/content';

const CLOSE_ANIMATION_MS = 200;
const SWIPE_THRESHOLD_PX = 40;

@Component({
  imports: [],
  selector: 'app-galeria-page',
  styleUrl: './galeria-page.scss',
  templateUrl: './galeria-page.html',
})
export class GaleriaPage {
  protected readonly content = inject(Content);

  protected readonly category = signal('Todas');
  protected readonly visible = computed<GalleryItem[]>(() =>
    this.category() === 'Todas' ? this.content.gallery : this.content.gallery.filter((p) => p.category === this.category()),
  );

  protected readonly index = signal<number | null>(null);
  protected readonly closing = signal(false);
  protected readonly current = computed(() => {
    const i = this.index();
    return i === null ? null : (this.visible()[i] ?? null);
  });

  private closeTimeoutId: ReturnType<typeof setTimeout> | undefined;
  private dragStartX: number | null = null;

  constructor() {
    effect(() => {
      document.body.style.overflow = this.index() !== null ? 'hidden' : '';
    });
    inject(DestroyRef).onDestroy(() => {
      clearTimeout(this.closeTimeoutId);
      document.body.style.overflow = '';
    });
  }

  protected setCategory(category: string): void {
    this.category.set(category);
  }

  protected open(i: number): void {
    this.index.set(i);
  }

  @HostListener('document:keydown.escape')
  protected close(): void {
    if (this.index() === null || this.closing()) return;
    this.closing.set(true);
    this.closeTimeoutId = setTimeout(() => {
      this.index.set(null);
      this.closing.set(false);
    }, CLOSE_ANIMATION_MS);
  }

  @HostListener('document:keydown.arrowright')
  protected next(): void {
    this.step(1);
  }

  @HostListener('document:keydown.arrowleft')
  protected prev(): void {
    this.step(-1);
  }

  private step(delta: number): void {
    const i = this.index();
    const total = this.visible().length;
    if (i === null || total === 0) return;
    this.index.set((i + delta + total) % total);
  }

  protected onPointerDown(event: PointerEvent): void {
    this.dragStartX = event.clientX;
  }

  protected onPointerUp(event: PointerEvent): void {
    if (this.dragStartX === null) return;
    const deltaX = event.clientX - this.dragStartX;
    this.dragStartX = null;
    if (Math.abs(deltaX) < SWIPE_THRESHOLD_PX) return;
    this.step(deltaX < 0 ? 1 : -1);
  }
}
