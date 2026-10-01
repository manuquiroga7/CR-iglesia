import { Component, HostListener, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-nav',
  styleUrl: './nav.scss',
  templateUrl: './nav.html',
})
export class Nav {
  protected readonly scrolled = signal(false);
  protected readonly mobileMenuOpen = signal(false);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrolled.set(window.scrollY > 40);
  }

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  protected closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
