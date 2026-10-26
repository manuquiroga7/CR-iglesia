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
  featured?: boolean;
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
    {
      date: '18 de enero, 2026',
      title: 'Retiro de jóvenes',
      excerpt:
        'Un fin de semana apartado para buscar a Dios en comunidad, con tiempos de alabanza, enseñanza y recreación.',
    },
    {
      date: '5 de enero, 2026',
      title: 'Cadena de oración de verano',
      excerpt:
        'Durante todo enero nos turnamos para interceder como congregación, confiando en que Dios renueva nuestras fuerzas.',
    },
    {
      date: '20 de diciembre, 2025',
      title: 'Culto de fin de año',
      excerpt:
        'Cerramos el año agradecidos, repasando lo que Dios hizo entre nosotros y esperando con fe lo que viene.',
    },
  ];

  readonly ministries: MinistryItem[] = [
    { name: 'Jóvenes', featured: true, description: 'Encuentros de crecimiento, comunidad y liderazgo para adolescentes y jóvenes.' },
    { name: 'Niños', featured: true, description: 'Escuelita en cada anexo, enseñando la Palabra a los más chicos de forma cercana y divertida.' },
    { name: 'Programas de YouTube', featured: true, description: 'La Huella Online: programas de voz y video que llevan la Palabra más allá de las paredes del templo.' },
    { name: 'Evangelismo', featured: true, description: 'Salir al encuentro de quienes aún no conocen a Cristo, compartiendo el Evangelio en la comunidad.' },
    { name: 'Alabanza', description: 'El equipo de música y adoración que acompaña cada reunión y evento especial.' },
    { name: 'Diaconado', description: 'Servicio y cuidado práctico de la congregación y de quienes más lo necesitan.' },
    { name: 'Pastorado', description: 'Pastoreo, acompañamiento y guía espiritual de la iglesia.' },
    { name: 'Intercesión', description: 'Un equipo dedicado a orar por la iglesia, las familias y las necesidades de la comunidad.' },
    { name: 'Damas', description: 'Un espacio de comunión, crecimiento y servicio para las mujeres de la congregación.' },
    { name: 'Guardería', description: 'Cuidado de los más pequeños mientras sus padres participan de las reuniones.' },
    { name: 'Limpieza', description: 'Mantener la casa de Dios ordenada y cuidada para recibir a todos.' },
    { name: 'Cocina', description: 'Comida completamente gratis para quienes quieran participar de las actividades después del mediodía los domingos, luego del culto general.' },
    { name: 'Buffet', description: 'Venta de comida a beneficio de las escuelitas.' },
    { name: 'Discipulado', description: 'Formación y acompañamiento para crecer en la fe y en el conocimiento de la Palabra.' },
    { name: 'Merenderos', description: 'Un plato de comida y una merienda para quienes más lo necesitan, con el amor de Cristo.' },
    { name: 'Dorcas', description: 'Donación de ropa para familias y personas que la necesitan.' },
    { name: 'Maestros de la Palabra', description: 'Hermanos dedicados a enseñar la Biblia en las clases y estudios de la iglesia.' },
    { name: 'Multimedia', description: 'Producción de imagen, video y recursos audiovisuales para la iglesia.' },
    { name: 'Redes sociales', description: 'Comunicación y presencia de la iglesia en el mundo digital.' },
    { name: 'Controles', description: 'Control de cámaras y mezcla de la transmisión de YouTube del culto.' },
  ];

  get featuredMinistries(): MinistryItem[] {
    return this.ministries.filter((m) => m.featured);
  }
}
