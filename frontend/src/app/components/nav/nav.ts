import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map } from 'rxjs';

const MENU_CLOSE_MS = 200;

interface NavLink {
  label: string;
  href: string;
  fragment?: string;
}

interface DesktopLink {
  label: string;
  path: string;
  fragment?: string;
}

@Component({
  imports: [RouterLink],
  selector: 'app-nav',
  styleUrl: './nav.scss',
  templateUrl: './nav.html',
})
export class Nav {
  private readonly router = inject(Router);

  // El hero ahora es claro: la barra va siempre sobre fondo pérola.
  protected readonly scrolled = signal(true);
  protected readonly mobileMenuOpen = signal(false);
  protected readonly mobileMenuRendered = signal(false);
  private unmountTimeoutId: ReturnType<typeof setTimeout> | undefined;

  /** Ruta actual sin query ni fragmento; se actualiza en cada navegación. */
  protected readonly currentPath = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.pathOf(this.router.url)),
    ),
    { initialValue: this.pathOf(window.location.pathname) },
  );

  protected readonly desktopLinks: DesktopLink[] = [
    { label: 'Inicio', path: '/' },
    { label: 'Nosotros', path: '/nosotros' },
    { label: 'Actividades', path: '/actividades' },
    { label: 'Anexos', path: '/anexos' },
    { label: 'Noticias', path: '/', fragment: 'noticias' },
    { label: 'Ministerios', path: '/ministerios' },
    { label: 'Mensajes', path: '/mensajes' },
    { label: 'Galería', path: '/galeria' },
    { label: 'Contacto', path: '/contacto' },
  ];

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

  /** Los links a un fragmento de la home (Noticias) no se marcan: "Inicio" ya cubre esa página. */
  protected isActive(link: DesktopLink): boolean {
    return !link.fragment && link.path === this.currentPath();
  }

  private pathOf(url: string): string {
    return url.split(/[?#]/)[0] || '/';
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
