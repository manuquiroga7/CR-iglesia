import { Component, inject } from '@angular/core';
import { Content } from '../../services/content';

@Component({
  imports: [],
  selector: 'app-radio',
  styleUrl: './radio.scss',
  templateUrl: './radio.html',
})
export class Radio {
  protected readonly content = inject(Content);
}
