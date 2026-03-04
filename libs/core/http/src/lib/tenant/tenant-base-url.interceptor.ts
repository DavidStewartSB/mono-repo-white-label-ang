// libs/core/http/src/lib/tenant/tenant-base-url.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { RuntimeAppConfigService } from '@cardapio-online/config';
import { TenantAuthService } from '@cardapio-online/auth';

@Injectable()
export class TenantBaseUrlInterceptor implements HttpInterceptor {
  constructor(
    private readonly runtimeCfg: RuntimeAppConfigService,
    private readonly auth: TenantAuthService
  ) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isAbsolute = /^https?:\/\//i.test(req.url);

    // ✅ Antes do config carregar, não mexe na request
    if (!this.runtimeCfg.isLoaded()) {
      return next.handle(req);
    }

    const cfg = this.runtimeCfg.get();
    const base = cfg.apiBaseUrl ?? '';
    const url = isAbsolute
      ? req.url
      : `${base}${req.url.startsWith('/') ? '' : '/'}${req.url}`;

    const token = this.auth.getSnapshot().accessToken;

    const cloned =
      token && !isAbsolute
        ? req.clone({ url, setHeaders: { Authorization: `Bearer ${token}` } })
        : req.clone({ url });

    return next.handle(cloned);
  }
}