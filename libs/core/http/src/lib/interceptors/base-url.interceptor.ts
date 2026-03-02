// libs/core/http/src/lib/interceptors/base-url.interceptor.ts
import { Inject, Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_CONFIG, AppConfig } from '@cardapio-online/config';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  constructor(@Inject(APP_CONFIG) private readonly cfg: AppConfig) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // Prova de acesso a config por app (singleton)
    // Futuro: cfg.apiBaseUrl + prefix em req.url
    return next.handle(req);
  }
}