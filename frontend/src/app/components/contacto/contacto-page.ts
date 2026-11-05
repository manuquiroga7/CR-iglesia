import { Component, inject, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Content } from '../../services/content';

@Component({
  imports: [],
  selector: 'app-contacto-page',
  styleUrl: './contacto-page.scss',
  templateUrl: './contacto-page.html',
})
export class ContactoPage {
  protected readonly content = inject(Content);

  protected readonly mapSrc = inject(DomSanitizer).bypassSecurityTrustResourceUrl(
    `https://www.google.com/maps?q=${encodeURIComponent(this.content.address)}&output=embed`,
  );

  protected readonly name = signal('');
  protected readonly message = signal('');
  protected readonly showError = signal(false);

  protected onName(event: Event): void {
    this.name.set((event.target as HTMLInputElement).value);
  }

  protected onMessage(event: Event): void {
    this.message.set((event.target as HTMLTextAreaElement).value);
    if (this.message().trim()) this.showError.set(false);
  }

  /** Arma el mensaje y abre WhatsApp con la consulta ya escrita. */
  protected send(event: Event): void {
    event.preventDefault();
    const message = this.message().trim();
    if (!message) {
      this.showError.set(true);
      return;
    }

    const name = this.name().trim();
    const lines = ['Consulta desde la web', name ? `Nombre: ${name}` : 'Nombre: (no indicado)', `Mensaje: ${message}`];
    window.open(`${this.content.whatsappUrl}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
  }
}
