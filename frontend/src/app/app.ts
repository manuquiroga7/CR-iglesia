import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './components/nav/nav';
import { Footer } from './components/footer/footer';
import { AccesosFijos } from './components/accesos-fijos/accesos-fijos';
import { ScrollTop } from './components/scroll-top/scroll-top';

@Component({
  imports: [RouterOutlet, Nav, Footer, ScrollTop, AccesosFijos],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  host: { class: 'block pb-16 sm:pb-0' },
})
export class App {}
