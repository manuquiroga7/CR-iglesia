# Página Ofrendar — Diseño

## Contexto

La sección "Ofrendar" hoy es solo un CTA en el Home (`components/home/ofrendar-cta`) con un botón "Ofrendar ahora" que apunta a `#`. Se pidió convertirlo en un flujo real de UI/UX para ofrendar, del mismo alcance que el resto del proyecto en esta etapa: **solo frontend, sin procesamiento de pagos real**. El backend/pasarela de pago lo maneja el equipo de backend por separado, en una etapa posterior.

## Alcance

- Construir una página dedicada `/ofrendar` (nueva ruta, mismo patrón que `/nosotros` y `/anexos`).
- Mostrar 3 métodos de ofrenda: transferencia bancaria, tarjeta/MercadoPago (UI no funcional todavía) y en el templo.
- Actualizar el CTA de Home para que el botón "Ofrendar ahora" navegue a `/ofrendar` en vez de `#`.
- Fuera de alcance: integración real con MercadoPago u otra pasarela, procesamiento de pagos, backend.

## Estructura de la página

1. **Banner** — mismo patrón visual que Nosotros/Anexos: fondo vino (`--color-wine-deep` → `--color-wine`), título "Apoyá con tu ofrenda", la cita bíblica (2 Corintios 9:7, ya existente en el CTA actual), borde inferior curvo (`border-bottom-*-radius: 50% 3rem`).

2. **Selector de método** — 3 tabs/cards clickeables, controlados por un signal (`metodoActivo`) en el componente: **Transferencia bancaria**, **Tarjeta / MercadoPago**, **En el templo**. Al elegir uno se muestra el contenido correspondiente debajo, sin recargar la página.

3. **Contenido por método:**
   - **Transferencia bancaria**: tarjeta con Banco, Número de cuenta, Titular, RUT/CI (si aplica) — todos como placeholder "A definir" hasta que el cliente los provea, con un botón "Copiar" junto a cada dato (visual, sin acción real por ahora ya que no hay datos que copiar).
   - **Tarjeta / MercadoPago**: formulario con un campo de monto libre en $UYU (sin montos sugeridos/preestablecidos, solo input numérico) y un botón "Ofrendar $X" — visualmente completo pero no funcional. Texto aclaratorio pequeño: "Pago en línea — disponible próximamente".
   - **En el templo**: texto invitando a ofrendar en persona durante los cultos, reutilizando los horarios ya existentes en `content.schedule` (mismo servicio que usa `horarios.ts`).

4. **Nota de cierre** (opcional, breve): línea reforzando el principio de dar con alegría, ya presente en el CTA actual.

## Cambios en componentes existentes

- `app.routes.ts`: agregar `{ path: 'ofrendar', component: Ofrendar }`.
- `nav.html` / `footer.html`: el enlace "Ofrendar" (hoy `/#ofrendar`) pasa a apuntar a `/ofrendar`.
- `components/home/ofrendar-cta/ofrendar-cta.html`: el botón "Ofrendar ahora" pasa de `href="#"` a `routerLink="/ofrendar"`.

## Fuera de alcance / pendiente

- Datos bancarios reales (banco, cuenta, titular) — placeholder hasta que el cliente los envíe.
- Integración real de pago con tarjeta/MercadoPago — queda como UI no funcional hasta que el equipo de backend esté listo para conectarla.
