import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withRouterConfig } from '@angular/router';

import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(
      appRoutes,
      withRouterConfig({
        onSameUrlNavigation: 'reload',
      }),
      withInMemoryScrolling({
        get scrollPositionRestoration() {
          let result: 'disabled' | 'enabled' = 'enabled';

          try {
            // Ensure this runs only in the browser.
            if (typeof window === 'undefined') {
              throw new Error('This is server env.');
            }

            // If app is not hydrated yet.
            if (!(<any>window).__hasHydrated) {
              const { pathname } = window.location;
              const isRouteHome = ['/home', '/home/', '/'].includes(pathname);

              // If it's the home route, disable scroll restoration.
              if (isRouteHome) {
                result = 'disabled';
              } else {
                // Mark as hydrated for subsequent loads.
                (<any>window).__hasHydrated = true;
              }
            }
          } catch (_) {
            // Scroll restoration ran on server.
          } finally {
            return result;
          }
        },
      })
    ), 
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),

  ]
};
