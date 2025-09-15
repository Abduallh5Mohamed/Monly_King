import { renderApplication } from '@angular/platform-server';
import { BootstrapContext } from '@angular/core';
import { App } from './app/app';
import { config } from './app/app.config.server';

const bootstrap = (context: BootstrapContext) => renderApplication(App, {
  appId: 'serverApp',
  ...config,
  providers: [
    ...(config.providers || []),
    ...(context.providers || [])
  ]
});

export default bootstrap;
