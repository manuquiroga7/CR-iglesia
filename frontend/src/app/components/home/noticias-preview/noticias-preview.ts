import { Component, inject } from '@angular/core';
import { Content } from '../../../services/content';

@Component({
  imports: [],
  selector: 'app-noticias-preview',
  styleUrl: './noticias-preview.scss',
  templateUrl: './noticias-preview.html',
})
export class NoticiasPreview {
  protected readonly content = inject(Content);
}
