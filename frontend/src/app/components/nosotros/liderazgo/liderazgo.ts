import { Component } from '@angular/core';

interface Leader {
  name: string;
  role: string;
}

@Component({
  imports: [],
  selector: 'app-liderazgo',
  styleUrl: './liderazgo.scss',
  templateUrl: './liderazgo.html',
})
export class Liderazgo {
  // Pendiente: nombres, cargos y fotos reales del liderazgo.
  protected readonly leaders: Leader[] = [
    { name: 'Juan Sueiro', role: 'Pastor' },
    { name: 'Nombre a confirmar', role: 'Pastora / Pastor adjunto' },
    { name: 'Nombre a confirmar', role: 'Diaconado' },
  ];
}
