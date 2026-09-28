# Diseño: Primera propuesta web — Cristo es la Respuesta

**Fecha:** 2026-08-28
**Estado:** Aprobado por el equipo, pendiente de mostrar al cliente

## Contexto

La iglesia "Cristo es la Respuesta" (Uruguay, Instagram: [@cristoes_larespuesta](https://www.instagram.com/cristoes_larespuesta)) necesita un sitio web institucional. Nuestro equipo se encarga exclusivamente del **frontend**; un compañero se encarga del backend (Laravel o Python) por separado. Esta primera etapa es para producir una propuesta visual (no definitiva, pero de trabajo confirmado) que se presentará al cliente.

## Alcance de esta etapa

- Frontend en Angular (última versión estable) + Flowbite/Tailwind CSS.
- **Sin ninguna integración a backend.** Todo el contenido dinámico se maneja como datos mock/placeholder en el frontend.
- Dos páginas: **Home** y **Nosotros/Historia**.
- El branding definitivo (paleta, logo, tipografías) lo va a proveer el cliente más adelante. Para esta propuesta usamos como placeholder referencias reales tomadas de su Instagram (ver sección Theming), dejando todo preparado para reemplazo fácil.
- Contenido textual: placeholder/de ejemplo, con tono institucional inspirado en lo público de su Instagram, a reemplazar por contenido real que provea el cliente.
- Fuera de alcance en esta etapa: Doctrina como página separada, sección Noticias, sección Servicios/Ministerios como página propia, sección Ofrendar como página propia, cualquier integración con API real, autenticación, pagos reales.

## Páginas y estructura de contenido

### Home
1. Hero institucional: mensaje/lema sobre imagen de fondo + CTAs rápidos (ver últimas noticias, ofrendar, ver horarios). Mantiene tono institucional, no solo estático.
2. Bloque "Quiénes somos" resumido, con link a Nosotros/Historia.
3. Próximos servicios / horarios de encuentro (domingo, martes, jueves — según Instagram).
4. Últimas noticias: 2-3 cards (con link a sección Noticias, aunque esa página no exista aún en esta instancia).
5. Ministerios destacados: 2-4 cards.
6. Bloque de Ofrendar (con link a esa sección, aunque tampoco esté armada aún).
7. Footer con redes sociales (Instagram) y contacto.

### Nosotros/Historia
Una sola página con scroll, navegación interna (anchors/tabs) y las siguientes secciones bien distribuidas:
1. Historia
2. Orígenes
3. Doctrina
4. Presente

## Enfoque técnico

**Flujo de trabajo (híbrido Stitch → Angular):**
1. Generar 1-2 variantes de Home y Nosotros en Google Stitch con la dirección visual acordada, para elegir/ajustar antes de escribir código.
2. Inicializar el repo Angular (`ng new`) + Flowbite/Tailwind con la estructura de carpetas acordada.
3. Implementar las pantallas elegidas como componentes Angular reales, con datos placeholder.
4. Entregar el resultado corriendo localmente para revisión del equipo antes de la reunión con el cliente.

Nota: Stitch resultó poco confiable en la práctica (timeouts sin generar pantallas), así que la primera vista provisional se armó directamente como mockup HTML estático, sirviendo como referencia visual mientras se decide si reintentar Stitch.

**Configuración del proyecto Angular:**
- Standalone components (default), routing habilitado, SSR desactivado (no se necesita para esta propuesta estática), SCSS/CSS.
- Flowbite + Tailwind CSS integrados según guía oficial para Angular.

**Estructura de carpetas** (calca el patrón usado en el proyecto Aether, `C:\wamp64\www\aether-dev\frontend`):

```
src/app/
  components/
    nav/                    (header/nav compartido)
    footer/                 (footer compartido)
    home/
      home.ts / .html / .css
      hero/
      quienes-somos/
      horarios/
      noticias-preview/
      ministerios/
      ofrendar-cta/
    nosotros/
      nosotros.ts / .html / .css
      historia/
      origenes/
      doctrina/
      presente/
  services/                 (ej. content.service.ts con datos placeholder)
  pipes/                    (si hace falta alguno)
public/images/
  branding/                 (logo/isotipo — assets estáticos sirven desde public/ en Angular CLI moderno)
  home/
  nosotros/
```

Cada sección de página es su propio subcomponente standalone, siguiendo el mismo patrón que `hero/`, `works/`, etc. en Aether. No se usan carpetas `core/` ni `shared/` separadas — todo vive bajo `components/`, coherente con el proyecto de referencia.

## Theming (placeholder, basado en branding real observado)

- **Paleta:** crema de fondo, verde oscuro como color primario, rojo oscuro como acento — tomados de las publicaciones reales del Instagram de la iglesia.
- Definidos como CSS custom properties (`--color-cream`, `--color-green`, `--color-red-accent`, etc.), mapeadas en la configuración de Tailwind. Un único punto de cambio para cuando llegue el branding oficial del cliente.
- **Tipografía:** una fuente serif/script para títulos ceremoniales (inspirada en el estilo "Horarios de Reuniones" visto en su Instagram) + una sans-serif limpia para cuerpo de texto, vía Google Fonts.
- **Logo:** isotipo real de la cruz/tabernáculo provisto por el cliente (`public/images/branding/logo.png`), usado en nav y footer.

Se documenta explícitamente en el repo que esta paleta/tipografía/logo son un placeholder de trabajo y serán reemplazados cuando el cliente confirme el branding oficial — el diseño de theming está pensado para que ese reemplazo sea de bajo esfuerzo.

## Contenido placeholder

- Textos de ejemplo con tono institucional/cálido, inspirados en lo público del Instagram de la iglesia (ej. Convención Nacional, horarios de reuniones domingo 10:00 / martes 20:00 / jueves 20:00, lenguaje bíblico), marcados como contenido a reemplazar.
- Datos mock (horarios, noticias destacadas, ministerios) centralizados en `services/content.service.ts`.

## Control de versiones

- Repositorio en el GitHub de la organización del equipo: `https://github.com/Aether-Developers-UY/CR-iglesia`.

## Fuera de alcance / a definir después

- Backend real (Laravel/Python) y su integración — a cargo de otro compañero de equipo.
- Páginas de Noticias, Servicios/Ministerios y Ofrendar como secciones propias.
- Branding definitivo (a proveer por el cliente).
- Base de datos MySQL (corresponde al backend).
- Más secciones que puedan surgir tras la reunión con el cliente.
