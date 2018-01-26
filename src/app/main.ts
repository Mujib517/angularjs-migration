import 'zone.js/dist/zone';

import { AppModule } from "./app.module";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(platformRef => {
        const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
        upgrade.bootstrap(document.body, ['app']);
        console.log("hybrid app bootstrapped");
    });
    
