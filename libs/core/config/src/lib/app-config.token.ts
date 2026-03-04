// libs/core/config/src/lib/app-config.token.ts
import { InjectionToken } from '@angular/core';

export type AppConfig = {
  appName: string;
  brandPrimary: string;
  brandLogoUrl: string;

  environmentName: 'local' | 'dev' | 'prod';
  apiBaseUrl: string;

  tenantSlug: string;

  // storage key por tenant (evita colidir)
  authStorageKey: string;
};

export const APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG');