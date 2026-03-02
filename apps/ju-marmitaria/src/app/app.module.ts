import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { APP_CONFIG } from '@cardapio-online/config';
import { ShellModule } from '@cardapio-online/shell';
import { HttpCoreModule } from '@cardapio-online/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,ShellModule, HttpCoreModule.forRoot(), RouterModule.forRoot(appRoutes)],
    providers: [
    {
      provide: APP_CONFIG,
      useValue: {
        appName: 'Ju Marmitaria',
        brandPrimary: '#7c3aed',
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
