import { renderApplication } from '@angular/platform-server';
import { bootstrapApplication } from '@angular/platform-browser';
import { Provider, BootstrapContext } from '@angular/core';
import { App } from './app/app';
import { config } from './app/app.config.server';

const bootstrap = (context: { providers: Provider[] }) => renderApplication(
  (bootstrapContext: BootstrapContext) => bootstrapApplication(App, {
    ...config,
    providers: [
      ...(config.providers || []),
      ...(context.providers || [])
    ]
  }),
  {
    appId: 'serverApp'
  }
);

export default bootstrap;
