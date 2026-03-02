// apps/ju-marmitaria/src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

import { ShellModule } from '@cardapio-online/shell';
import { APP_CONFIG } from '@cardapio-online/config';
import { HttpCoreModule } from '@cardapio-online/http';
import { environment } from '@env/ju-marmitaria';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ShellModule,
    HttpCoreModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    {
      provide: APP_CONFIG,
 useValue: {
      appName: 'Ju Marmitaria',
      brandPrimary: '#7c3aed',
      brandLogoUrl: '/assets/brand/logo.png',

      environmentName: environment.name,
      apiBaseUrl: environment.apiBaseUrl,
      authStorageKey: environment.authStorageKey,
    },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}