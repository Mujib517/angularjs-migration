import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UpgradeModule } from '@angular/upgrade/static';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
    imports: [BrowserModule, UpgradeModule],
    declarations: [AppComponent, HomeComponent, AboutComponent],
    bootstrap: [AppComponent],
    entryComponents: [HomeComponent,AboutComponent]
})
export class AppModule { }