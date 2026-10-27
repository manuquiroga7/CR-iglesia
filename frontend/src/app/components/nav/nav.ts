import { Component, HostListener, signal } from '@angular/core';

const MENU_CLOSE_MS = 200;

interface NavLink {
  label: string;
  href: string;
}

@Component({
  imports: [],
  selector: 'app-nav',
  styleUrl: './nav.scss',
  templateUrl: './nav.html',
})
export class Nav {
  protected readonly scrolled = signal(false);
  protected readonly mobileMenuOpen = signal(false);
  protected readonly mobileMenuRendered = signal(false);
  private unmountTimeoutId: ReturnType<typeof setTimeout> | undefined;

  protected readonly currentPath = window.location.pathname;

  protected readonly mobileLinks: NavLink[] = [
    { label: 'Inicio', href: '/' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Anexos', href: '/anexos' },
    { label: 'Noticias', href: '/#noticias' },
    { label: 'Ministerios', href: '/ministerios' },
    { label: 'La Huella', href: '/la-huella' },
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrolled.set(window.scrollY > 40);
  }

  protected toggleMobileMenu(): void {
    if (this.mobileMenuOpen()) {
      this.closeMobileMenu();
    } else {
      clearTimeout(this.unmountTimeoutId);
      this.mobileMenuRendered.set(true);
      this.mobileMenuOpen.set(true);
    }
  }

  protected closeMobileMenu(): void {
    if (!this.mobileMenuOpen()) return;
    this.mobileMenuOpen.set(false);
    this.unmountTimeoutId = setTimeout(() => this.mobileMenuRendered.set(false), MENU_CLOSE_MS);
  }
}
