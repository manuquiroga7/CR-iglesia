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

export interface RadioProgram {
  name: string;
  description?: string;
  schedule?: string;
}

export interface MinistryItem {
  name: string;
  description: string;
  icon: string;
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
    { name: 'Jóvenes', icon: 'zap', featured: true, description: 'Encuentros de crecimiento, comunidad y liderazgo para adolescentes y jóvenes.' },
    { name: 'Niños', icon: 'smile', featured: true, description: 'Escuelita en cada anexo, enseñando la Palabra a los más chicos de forma cercana y divertida.' },
    { name: 'Programas de YouTube', icon: 'youtube', featured: true, description: 'La Huella Online: programas de voz y video que llevan la Palabra más allá de las paredes del templo.' },
    { name: 'Evangelismo', icon: 'globe', featured: true, description: 'Salir al encuentro de quienes aún no conocen a Cristo, compartiendo el Evangelio en la comunidad.' },
    { name: 'Alabanza', icon: 'music', description: 'El equipo de música y adoración que acompaña cada reunión y evento especial.' },
    { name: 'Coro', icon: 'choir', description: 'El coro de la iglesia, que acompaña con su canto la adoración de la congregación.' },
    { name: 'Diaconado', icon: 'helping', description: 'Servicio y cuidado práctico de la congregación y de quienes más lo necesitan.' },
    { name: 'Pastorado', icon: 'crook', description: 'Pastoreo, acompañamiento y guía espiritual de la iglesia.' },
    { name: 'Intercesión', icon: 'flame', description: 'Un equipo dedicado a orar por la iglesia, las familias y las necesidades de la comunidad.' },
    { name: 'Damas', icon: 'flower', description: 'Un espacio de comunión, crecimiento y servicio para las mujeres de la congregación.' },
    { name: 'Guardería', icon: 'baby', description: 'Cuidado de los más pequeños mientras sus padres participan de las reuniones.' },
    { name: 'Limpieza', icon: 'sparkles', description: 'Mantener la casa de Dios ordenada y cuidada para recibir a todos.' },
    { name: 'Cocina', icon: 'chef', description: 'Almuerzo para quienes quieran participar de las actividades luego del culto general. Y comida para diversas actividades.' },
    { name: 'Buffet', icon: 'bag', description: 'Venta de comida a beneficio de las escuelitas.' },
    { name: 'Discipulado', icon: 'cap', description: 'Formación y acompañamiento para crecer en la fe y en el conocimiento de la Palabra.' },
    { name: 'Merenderos', icon: 'coffee', description: 'Un plato de comida y una merienda para quienes más lo necesitan, con el amor de Cristo.' },
    { name: 'Dorcas', icon: 'shirt', description: 'Donación de ropa para familias y personas que la necesitan.' },
    { name: 'Maestros de la Palabra', icon: 'book', description: 'Hermanos dedicados a enseñar la Biblia en las clases y estudios de la iglesia.' },
    { name: 'Multimedia', icon: 'video', description: 'Producción de imagen, video y recursos audiovisuales para la iglesia.' },
    { name: 'Redes sociales', icon: 'share', description: 'Comunicación y presencia de la iglesia en el mundo digital.' },
    { name: 'Controles', icon: 'sliders', description: 'Control de cámaras y mezcla de la transmisión de YouTube del culto.' },
  ];

  readonly huellaPrograms: RadioProgram[] = [
    { name: 'En compañía del pastor', schedule: 'Todos los días · 21:00 hs', description: 'Reflexiones de reuniones con diferentes participantes, entre ellos el pastor de la congregación, Juan Sueiro.' },
    { name: 'En compañía del pastor Teens', schedule: 'Todos los viernes', description: 'Un programa de adolescentes donde pasan un rato divertido, comparten alguna reflexión y muestran la luz del evangelio.' },
    { name: 'Punto de quiebre', schedule: 'Todos los domingos · 17:00 hs', description: 'Un programa de jóvenes donde se tocan profundamente los temas que hoy afligen a la juventud.' },
    { name: 'ECOS', schedule: 'Todos los miércoles · 19:30 hs', description: 'Un programa de jóvenes desestructurado y divertido, para llevar a Jesús de una manera distinta a las almas que tal vez no se animan a ir a una iglesia.' },
    { name: 'Impartiendo vida' },
    { name: 'La hora de predicar es ahora', schedule: 'Todos los miércoles · 22:00 hs' },
    { name: 'Mujeres de fe', schedule: 'Martes y jueves · 16:30 hs', description: 'Un programa dedicado a las damas de la congregación.' },
    { name: 'A sus pies' },
    { name: 'Compartiendo su palabra', schedule: 'Todos los martes', description: 'Un programa de estudio bíblico.' },
  ];

  readonly youtubeChannelUrl = 'https://www.youtube.com/@lahuellaonlinecr4464';
}
