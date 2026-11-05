import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Nosotros } from './components/nosotros/nosotros';
import { Anexos } from './components/anexos/anexos';
import { Ofrendar } from './components/ofrendar/ofrendar';
import { MinisteriosPage } from './components/ministerios/ministerios-page';
import { LaHuella } from './components/la-huella/la-huella';
import { ActividadesPage } from './components/actividades/actividades-page';
import { MensajesPage } from './components/mensajes/mensajes-page';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'nosotros', component: Nosotros },
  { path: 'anexos', component: Anexos },
  { path: 'ofrendar', component: Ofrendar },
  { path: 'ministerios', component: MinisteriosPage },
  { path: 'la-huella', component: LaHuella },
  { path: 'actividades', component: ActividadesPage },
  { path: 'mensajes', component: MensajesPage },
];
