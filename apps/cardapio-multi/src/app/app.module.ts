// apps/cardapio-online/src/app/app.module.ts
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

import { environment } from '../environments/environment';

import { ShellModule } from '@cardapio-online/shell';
import { HttpCoreModule, TenantHttpCoreModule } from '@cardapio-online/http';

import { APP_CONFIG } from '@cardapio-online/config';
import { RuntimeAppConfigService } from '@cardapio-online/config';

export function initAppConfig(runtime: RuntimeAppConfigService) {
  return () =>
    runtime.load({
      environmentName: environment.name,
      apiBaseUrl: environment.apiBaseUrl,
    });
}

export function appConfigFactory(runtime: RuntimeAppConfigService) {
  return runtime.get();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TenantHttpCoreModule.forRoot(),
    ShellModule,
    HttpCoreModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initAppConfig,
      deps: [RuntimeAppConfigService],
      multi: true,
    },
    {
      provide: APP_CONFIG,
      useFactory: appConfigFactory,
      deps: [RuntimeAppConfigService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}