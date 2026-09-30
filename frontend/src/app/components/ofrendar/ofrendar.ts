import { Component, inject, signal } from '@angular/core';
import { Content } from '../../services/content';

type Metodo = 'transferencia' | 'tarjeta' | 'templo';

interface DatoBancario {
  etiqueta: string;
  valor: string;
}

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

  protected readonly datosBancarios: DatoBancario[] = [
    { etiqueta: 'Banco', valor: 'A definir' },
    { etiqueta: 'Número de cuenta', valor: 'A definir' },
    { etiqueta: 'Titular', valor: 'A definir' },
    { etiqueta: 'RUT / CI', valor: 'A definir' },
  ];

  protected elegirMetodo(metodo: Metodo): void {
    this.metodoActivo.set(metodo);
  }

  protected onMontoChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.monto.set(value ? Number(value) : null);
  }
}
