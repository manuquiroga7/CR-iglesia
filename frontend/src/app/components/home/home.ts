import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { QuienesSomos } from './quienes-somos/quienes-somos';
import { Horarios } from './horarios/horarios';
import { Video } from './video/video';
import { NoticiasPreview } from './noticias-preview/noticias-preview';
import { Ministerios } from './ministerios/ministerios';
import { OfrendarCta } from './ofrendar-cta/ofrendar-cta';
import { Oracion } from './oracion/oracion';

@Component({
  imports: [Hero, QuienesSomos, Horarios, Video, NoticiasPreview, Ministerios, Oracion, OfrendarCta],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
