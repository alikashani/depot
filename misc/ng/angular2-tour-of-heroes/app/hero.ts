import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';

bootstrap(AppComponent, [
  appRouterProviders
]);

export class Hero {
  id: number;
  name: string;
}
