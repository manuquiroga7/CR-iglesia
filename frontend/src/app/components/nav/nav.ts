import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

const MENU_CLOSE_MS = 200;

interface NavLink {
  label: string;
  href: string;
  fragment?: string;
}

@Component({
  imports: [RouterLink],
  selector: 'app-nav',
  styleUrl: './nav.scss',
  templateUrl: './nav.html',
})
export class Nav {
  // El hero ahora es claro: la barra va siempre sobre fondo pérola.
  protected readonly scrolled = signal(true);
  protected readonly mobileMenuOpen = signal(false);
  protected readonly mobileMenuRendered = signal(false);
  private unmountTimeoutId: ReturnType<typeof setTimeout> | undefined;

  protected readonly currentPath = window.location.pathname;

  protected readonly mobileLinks: NavLink[] = [
    { label: 'Inicio', href: '/' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Actividades', href: '/actividades' },
    { label: 'Anexos', href: '/anexos' },
    { label: 'Noticias', href: '/#noticias', fragment: 'noticias' },
    { label: 'Ministerios', href: '/ministerios' },
    { label: 'Mensajes', href: '/mensajes' },
    { label: 'Galería', href: '/galeria' },
    { label: 'Contacto', href: '/contacto' },
  ];

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
