import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Nosotros } from './components/nosotros/nosotros';
import { Anexos } from './components/anexos/anexos';
import { Ofrendar } from './components/ofrendar/ofrendar';
import { MinisteriosPage } from './components/ministerios/ministerios-page';
import { Radio } from './components/radio/radio';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'nosotros', component: Nosotros },
  { path: 'anexos', component: Anexos },
  { path: 'ofrendar', component: Ofrendar },
  { path: 'ministerios', component: MinisteriosPage },
  { path: 'radio', component: Radio },
];
