import { Component, inject } from '@angular/core';
import { Content } from '../../../services/content';

@Component({
  imports: [],
  selector: 'app-ministerios',
  styleUrl: './ministerios.scss',
  templateUrl: './ministerios.html',
})
export class Ministerios {
  protected readonly content = inject(Content);
}
