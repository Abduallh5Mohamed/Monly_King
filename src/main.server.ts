import { renderApplication } from '@angular/platform-server';
import { bootstrapApplication } from '@angular/platform-browser';
import { Provider } from '@angular/core';
import { App } from './app/app';
import { config } from './app/app.config.server';

interface ServerBootstrapContext { 
  providers?: Provider[];
  document?: string;
}

const bootstrap = (context: ServerBootstrapContext = {}) => {
  return renderApplication(
    () => bootstrapApplication(App, {
      ...config,
      providers: [
        ...(config.providers || []),
        ...(context.providers || [])
      ]
    }),
    {
      document: context.document || '<html><head></head><body><app-root></app-root></body></html>'
    }
  );
};

export default bootstrap;
