import '@progress/kendo-theme-default/dist/all.css';

import { RouterModule, NavigationError, Router } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { BaseModule } from '@progress/kendo-angular-component-base';
import { ROUTES } from './app.config';

import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {
    constructor(router: Router, location: Location) {
        router.events.pipe(
            filter(event => event instanceof NavigationError)
        ).subscribe((event: NavigationError) => {
            // Restore the current location if the page errors out
            const restoreUrl = () => location.go(event.url);
            setTimeout(restoreUrl);
        });
    }
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        RouterModule.forRoot(ROUTES),
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        BaseModule
    ],
    exports: [
        RouterModule,
        HttpClientModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

declare const module: any;
if (module && module.hot) {
    module.hot.accept();
}

platformBrowserDynamic().bootstrapModule(AppModule);
