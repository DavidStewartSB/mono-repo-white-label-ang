// libs/core/http/src/lib/http-core.module.ts  (ajuste o caminho conforme sua lib real)
import { ModuleWithProviders, NgModule } from '@angular/core';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';

@NgModule({})
export class HttpCoreModule {
  static forRoot(): ModuleWithProviders<HttpCoreModule> {
    return {
      ngModule: HttpCoreModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: BaseUrlInterceptor,
          multi: true,
        },
      ],
    };
  }
}