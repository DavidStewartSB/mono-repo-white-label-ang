// libs/core/tenant/src/lib/tenant-resolver.service.ts
import { Injectable } from '@angular/core';

export type TenantResolution = {
  hostname: string;
  tenantSlug: string; // ex: "ju-marmataria"
};

@Injectable({ providedIn: 'root' })
export class TenantResolverService {
  resolve(hostname: string = window.location.hostname): TenantResolution {
    // exemplos:
    // ju-marmataria.localhost
    // blend-food.localhost
    // x.localhost
    // ju.mydomain.com

    const parts = hostname.split('.').filter(Boolean);

    // localhost (sem subdomínio)
    if (hostname === 'localhost' || parts.length < 2) {
      return { hostname, tenantSlug: 'default' };
    }

    // subdomínio = primeiro label
    const tenantSlug = parts[0];

    return { hostname, tenantSlug };
  }
}