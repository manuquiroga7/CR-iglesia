import { Component, inject } from '@angular/core';
import { Content } from '../../../services/content';

@Component({
  imports: [],
  selector: 'app-primera-vez',
  styleUrl: './primera-vez.scss',
  templateUrl: './primera-vez.html',
})
export class PrimeraVez {
  protected readonly content = inject(Content);

  protected readonly whatsappHref =
    this.content.whatsappUrl + '?text=' + encodeURIComponent('Hola, es mi primera vez y quisiera visitarlos. ¿Me pueden dar más información?');
}
