import { Component, DestroyRef, inject, signal } from '@angular/core';
import { Content } from '../../services/content';

type Metodo = 'transferencia' | 'tarjeta' | 'templo';

interface DatoBancario {
  etiqueta: string;
  valor: string;
}

const PENDIENTE = 'A definir';
const COPIED_FEEDBACK_MS = 1800;

@Component({
  imports: [],
  selector: 'app-ofrendar',
  styleUrl: './ofrendar.scss',
  templateUrl: './ofrendar.html',
})
export class Ofrendar {
  protected readonly content = inject(Content);

  protected readonly metodoActivo = signal<Metodo>('transferencia');
  protected readonly monto = signal<number | null>(null);
  protected readonly copiado = signal<string | null>(null);
  private copiadoTimeoutId: ReturnType<typeof setTimeout> | undefined;

  // Pendiente: datos bancarios oficiales de la iglesia.
  protected readonly datosBancarios: DatoBancario[] = [
    { etiqueta: 'Banco', valor: PENDIENTE },
    { etiqueta: 'Número de cuenta', valor: PENDIENTE },
    { etiqueta: 'Titular', valor: PENDIENTE },
    { etiqueta: 'RUT / CI', valor: PENDIENTE },
  ];

  constructor() {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.copiadoTimeoutId));
  }

  protected esPendiente(dato: DatoBancario): boolean {
    return dato.valor === PENDIENTE;
  }

  protected elegirMetodo(metodo: Metodo): void {
    this.metodoActivo.set(metodo);
  }

  protected onMontoChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.monto.set(value ? Number(value) : null);
  }

  protected async copiar(dato: DatoBancario): Promise<void> {
    if (this.esPendiente(dato)) return;
    try {
      await navigator.clipboard.writeText(dato.valor);
    } catch {
      return;
    }
    this.copiado.set(dato.etiqueta);
    clearTimeout(this.copiadoTimeoutId);
    this.copiadoTimeoutId = setTimeout(() => this.copiado.set(null), COPIED_FEEDBACK_MS);
  }
}
