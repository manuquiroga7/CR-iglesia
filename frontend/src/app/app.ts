import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './components/nav/nav';
import { Footer } from './components/footer/footer';
import { ScrollTop } from './components/scroll-top/scroll-top';

@Component({
  imports: [RouterOutlet, Nav, Footer, ScrollTop],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
