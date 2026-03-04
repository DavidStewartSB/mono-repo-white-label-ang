// libs/core/http/src/lib/tenant/tenant-http-core.module.ts
import { ModuleWithProviders, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TenantBaseUrlInterceptor } from './tenant-base-url.interceptor';

@NgModule({})
export class TenantHttpCoreModule {
  static forRoot(): ModuleWithProviders<TenantHttpCoreModule> {
    return {
      ngModule: TenantHttpCoreModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TenantBaseUrlInterceptor,
          multi: true,
        },
      ],
    };
  }
}