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

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // placeholder: futuramente cfg pode ter apiBaseUrl
    // aqui só prova o singleton e o acesso à config
    return next.handle(req);
  }
}