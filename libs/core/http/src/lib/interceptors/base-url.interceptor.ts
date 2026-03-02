// libs/core/http/src/lib/interceptors/base-url.interceptor.ts
import { Inject, Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '@cardapio-online/auth';
import { APP_CONFIG, AppConfig } from '@cardapio-online/config';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  constructor(
    @Inject(APP_CONFIG) private readonly cfg: AppConfig,
    private readonly auth: AuthService
  ) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isAbsolute = /^https?:\/\//i.test(req.url);
    const url = isAbsolute
      ? req.url
      : `${this.cfg.apiBaseUrl}${req.url.startsWith('/') ? '' : '/'}${req.url}`;

    const token = this.auth.getSnapshot().accessToken;

    const cloned = token && !isAbsolute
      ? req.clone({ url, setHeaders: { Authorization: `Bearer ${token}` } })
      : req.clone({ url });

    return next.handle(cloned);
  }
}