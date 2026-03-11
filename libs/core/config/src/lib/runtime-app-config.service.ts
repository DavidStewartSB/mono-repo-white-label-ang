// libs/core/config/src/lib/runtime-app-config.service.ts
import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { TenantResolverService } from '@cardapio-online/tenant';
import type { AppConfig } from './app-config.token';

export type AppConfigApiResponse = {
  appName: string;
  brandPrimary: string;
  brandLogoUrl: string;
  mascoteLogo: string;
};

@Injectable({ providedIn: 'root' })
export class RuntimeAppConfigService {
  private value: AppConfig | null = null;

  // ✅ HttpClient SEM interceptors
  private readonly rawHttp: HttpClient;

  constructor(
    httpBackend: HttpBackend,
    private readonly tenant: TenantResolverService
  ) {
    this.rawHttp = new HttpClient(httpBackend);
  }

  isLoaded(): boolean {
    return !!this.value;
  }

  get(): AppConfig {
    if (!this.value) throw new Error('APP_CONFIG not initialized');
    return this.value;
  }

  async load(params: { environmentName: AppConfig['environmentName']; apiBaseUrl: string }) {
    const { tenantSlug } = this.tenant.resolve();

    const base = params.apiBaseUrl ?? '';
    const url = `${base}/public/app-config`;

   const dto = await firstValueFrom(this.rawHttp.get<AppConfigApiResponse>(url));

if (!dto || typeof dto.appName !== 'string' || typeof dto.brandPrimary !== 'string') {
  throw new Error('APP_CONFIG invalid response');
}

    this.value = {
      appName: dto.appName,
      brandPrimary: dto.brandPrimary,
      brandLogoUrl: dto.brandLogoUrl,
     mascoteLogo: dto.mascoteLogo,
      environmentName: params.environmentName,
      apiBaseUrl: params.apiBaseUrl,

      tenantSlug,
      authStorageKey: `${tenantSlug}.auth`,
    };
  }
}