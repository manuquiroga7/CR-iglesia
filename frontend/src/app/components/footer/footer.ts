import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Content } from '../../services/content';

@Component({
  imports: [RouterLink],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly content = inject(Content);
}
