import { Component, inject } from '@angular/core';
import { Content } from '../../services/content';

@Component({
  imports: [],
  selector: 'app-la-huella',
  styleUrl: './la-huella.scss',
  templateUrl: './la-huella.html',
})
export class LaHuella {
  protected readonly content = inject(Content);
}
