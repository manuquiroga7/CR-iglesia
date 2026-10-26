import { Component, inject } from '@angular/core';
import { Content } from '../../services/content';

@Component({
  imports: [],
  selector: 'app-ministerios-page',
  styleUrl: './ministerios-page.scss',
  templateUrl: './ministerios-page.html',
})
export class MinisteriosPage {
  protected readonly content = inject(Content);
}
