import { Service } from '@angular/core';

export interface ScheduleItem {
  day: string;
  kind: string;
  time: string;
}

export interface NewsItem {
  date: string;
  title: string;
  excerpt: string;
}

export interface MinistryItem {
  name: string;
  description: string;
}

/**
 * Contenido placeholder/de ejemplo para la primera propuesta.
 * A reemplazar por el contenido real que provea el cliente.
 */
@Service()
export class Content {
  readonly address = 'Burgues 3826 esq. José Batlle y Ordóñez, Montevideo, Uruguay';
  readonly instagramUrl = 'https://www.instagram.com/cristoes_larespuesta';
  readonly instagramHandle = '@cristoes_larespuesta';

  readonly schedule: ScheduleItem[] = [
    { day: 'Domingo', kind: 'Reunión general', time: '10:00' },
    { day: 'Martes', kind: 'Estudio bíblico', time: '20:00' },
    { day: 'Jueves', kind: 'Oración y alabanza', time: '20:00' },
  ];

  readonly news: NewsItem[] = [
    {
      date: '29 de marzo, 2026',
      title: 'Convención Nacional 2026',
      excerpt:
        'Un tiempo apartado para buscar la dirección de Dios y ser edificados como iglesia. "He aquí que yo hago cosa nueva" — Isaías 43:19.',
    },
    {
      date: '14 de febrero, 2026',
      title: 'Nuevo ciclo de Escuela Bíblica',
      excerpt:
        'Comienza un nuevo trimestre de formación para todas las edades, con clases los martes antes del estudio bíblico.',
    },
    {
      date: '2 de febrero, 2026',
      title: 'Jornada de puertas abiertas',
      excerpt:
        'Invitamos a familias del barrio a conocer nuestra comunidad con una tarde de encuentro, música y testimonios.',
    },
  ];

  readonly ministries: MinistryItem[] = [
    { name: 'Jóvenes', description: 'Encuentros semanales de crecimiento, comunidad y liderazgo para adolescentes y jóvenes adultos.' },
    { name: 'Niños', description: 'Escuela dominical con clases por edades, enseñando la Palabra de forma cercana y divertida.' },
    { name: 'Alabanza', description: 'El equipo de música y adoración que acompaña cada reunión y evento especial.' },
    { name: 'Matrimonios', description: 'Un espacio de consejería y comunidad para fortalecer la vida en pareja y familiar.' },
  ];
}
