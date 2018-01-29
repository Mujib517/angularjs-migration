import 'zone.js/dist/zone';

import { AppModule } from "./app.module";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import { downgradeComponent,downgradeInjectable } from '@angular/upgrade/static';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { UserService } from './shared/user.service';

declare var angular: any;

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(platformRef => {


        angular.module('app')
            .directive('home', downgradeComponent({ component: HomeComponent }))
            .directive('about', downgradeComponent({ component: AboutComponent }))
            .directive('user', downgradeComponent({ component: UserComponent }))
            .service('userService', downgradeInjectable(UserService));

        const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
        upgrade.bootstrap(document.body, ['app']);
    });

