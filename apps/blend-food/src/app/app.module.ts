import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { APP_CONFIG } from '@cardapio-online/config';
import { HttpCoreModule } from '@cardapio-online/http';
import { ShellModule } from '@cardapio-online/shell';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ShellModule, 
    HttpCoreModule.forRoot(),
    RouterModule.forRoot(appRoutes)],
     providers: [
    {
      provide: APP_CONFIG,
      useValue: {
        appName: 'Bleend Food',
        brandPrimary: '#16a34a',
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
