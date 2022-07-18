import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//if (environment.production) {
  enableProdMode();
//}

var admin = require("firebase-admin");

var serviceAccount = require("heyandes-test-gzulian-firebase-adminsdk-4dulc-0bf4e12126.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
