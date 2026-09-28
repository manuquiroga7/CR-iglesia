import { Component } from '@angular/core';

interface Belief {
  title: string;
  description: string;
}

@Component({
  imports: [],
  selector: 'app-doctrina',
  styleUrl: './doctrina.scss',
  templateUrl: './doctrina.html',
})
export class Doctrina {
  protected readonly beliefs: Belief[] = [
    { title: 'La Biblia', description: 'Creemos que es la Palabra de Dios inspirada, y la única regla de fe y conducta para nuestra vida.' },
    { title: 'Jesucristo', description: 'Creemos en su nacimiento virginal, su muerte en la cruz por nuestros pecados y su resurrección.' },
    { title: 'La salvación', description: 'Creemos que se recibe por gracia, mediante la fe en Jesucristo, y no por obras o méritos propios.' },
    { title: 'La Iglesia', description: 'Creemos en la Iglesia como el cuerpo de Cristo, llamada a anunciar el Evangelio y servir a su comunidad.' },
  ];
}
