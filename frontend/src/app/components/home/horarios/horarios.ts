import { Component, inject } from '@angular/core';
import { Content } from '../../../services/content';

@Component({
  imports: [],
  selector: 'app-horarios',
  styleUrl: './horarios.scss',
  templateUrl: './horarios.html',
})
export class Horarios {
  protected readonly content = inject(Content);
}
