import { Component, inject } from '@angular/core';
import { Content } from '../../../services/content';
import { MinistryIcon } from '../../ministerios/ministry-icon';

@Component({
  imports: [MinistryIcon],
  selector: 'app-ministerios',
  styleUrl: './ministerios.scss',
  templateUrl: './ministerios.html',
})
export class Ministerios {
  protected readonly content = inject(Content);
}
