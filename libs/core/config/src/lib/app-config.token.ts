// libs/core/config/src/lib/app-config.token.ts
import { InjectionToken } from '@angular/core';

export type AppConfig = {
  appName: string;
  brandPrimary: string;
};

export const APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG');