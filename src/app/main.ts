import 'zone.js/dist/zone';

import { AppModule } from "./app.module";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import { downgradeComponent } from '@angular/upgrade/static';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

declare var angular: any;

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(platformRef => {


        angular.module('app')
            .directive('home', downgradeComponent({ component: HomeComponent }))
            .directive('about', downgradeComponent({ component: AboutComponent }));

        const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
        upgrade.bootstrap(document.body, ['app']);
        console.log("hybrid app bootstrapped");
    });

