import { Component, HostListener, signal } from '@angular/core';

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
    this.mobileMenuOpen.update((open) => !open);
  }

  protected closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
