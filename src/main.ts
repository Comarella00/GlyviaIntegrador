import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []), // mantém outros providers existentes
    provideHttpClient(),            // adiciona o HttpClient moderno
  ]
})
  .catch((err) => console.error(err));
