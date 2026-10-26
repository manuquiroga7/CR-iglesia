import { DestroyRef, inject, Signal, signal } from '@angular/core';

const MOBILE_QUERY = '(max-width: 639px)';

export function injectIsMobile(): Signal<boolean> {
  const mql = window.matchMedia(MOBILE_QUERY);
  const isMobile = signal(mql.matches);
  const update = () => isMobile.set(mql.matches);

  mql.addEventListener('change', update);
  window.addEventListener('resize', update);
  inject(DestroyRef).onDestroy(() => {
    mql.removeEventListener('change', update);
    window.removeEventListener('resize', update);
  });

  return isMobile;
}
