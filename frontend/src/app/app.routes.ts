import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Nosotros } from './components/nosotros/nosotros';
import { Anexos } from './components/anexos/anexos';
import { Ofrendar } from './components/ofrendar/ofrendar';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'nosotros', component: Nosotros },
  { path: 'anexos', component: Anexos },
  { path: 'ofrendar', component: Ofrendar },
];
