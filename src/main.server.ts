import { renderApplication } from '@angular/platform-server';
import { Provider } from '@angular/core';
import { App } from './app/app';
import { config } from './app/app.config.server';

const bootstrap = (context: { providers: Provider[] }) => renderApplication(App, {
  appId: 'serverApp',
  ...config,
  providers: [
    ...(config.providers || []),
    ...(context.providers || [])
  ]
});

export default bootstrap;
