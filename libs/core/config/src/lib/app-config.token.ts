// libs/core/config/src/lib/app-config.token.ts
import { InjectionToken } from '@angular/core';

export type AppConfig = {
  appName: string;
  brandPrimary: string;

  apiBaseUrl: string;
  authStorageKey: string;

  environmentName: 'local' | 'dev' | 'prod';
  brandLogoUrl: string; // ex: '/assets/brand/logo.png'
};

export const APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG');