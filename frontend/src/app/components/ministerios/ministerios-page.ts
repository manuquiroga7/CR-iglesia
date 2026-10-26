import { Component, inject } from '@angular/core';
import { Content } from '../../services/content';
import { MinistryIcon } from './ministry-icon';

@Component({
  imports: [MinistryIcon],
  selector: 'app-ministerios-page',
  styleUrl: './ministerios-page.scss',
  templateUrl: './ministerios-page.html',
})
export class MinisteriosPage {
  protected readonly content = inject(Content);
}
