import { Component, inject, signal } from '@angular/core';
import { Content } from '../../../services/content';

@Component({
  imports: [],
  selector: 'app-oracion',
  styleUrl: './oracion.scss',
  templateUrl: './oracion.html',
})
export class Oracion {
  private readonly content = inject(Content);

  protected readonly name = signal('');
  protected readonly request = signal('');
  protected readonly confidential = signal(false);
  protected readonly showError = signal(false);

  protected onName(event: Event): void {
    this.name.set((event.target as HTMLInputElement).value);
  }

  protected onRequest(event: Event): void {
    this.request.set((event.target as HTMLTextAreaElement).value);
    if (this.request().trim()) this.showError.set(false);
  }

  protected onConfidential(event: Event): void {
    this.confidential.set((event.target as HTMLInputElement).checked);
  }

  /** Arma el mensaje y abre WhatsApp con el pedido ya escrito. */
  protected send(event: Event): void {
    event.preventDefault();
    const request = this.request().trim();
    if (!request) {
      this.showError.set(true);
      return;
    }

    const name = this.name().trim();
    const lines = [
      'Pedido de oración',
      name ? `Nombre: ${name}` : 'Nombre: (prefiero no decirlo)',
      `Motivo: ${request}`,
    ];
    if (this.confidential()) lines.push('Es confidencial: solo para el equipo de intercesión.');

    const href = `${this.content.whatsappUrl}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(href, '_blank', 'noopener');
  }
}
