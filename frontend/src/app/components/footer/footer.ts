import { Component, inject } from '@angular/core';
import { Content } from '../../services/content';

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly content = inject(Content);
}
