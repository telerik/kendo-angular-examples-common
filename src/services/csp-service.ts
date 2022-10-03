import { Router, NavigationStart } from '@angular/router';
import { Injectable, Optional } from '@angular/core';

import { filter } from 'rxjs/operators';

// tslint:disable: no-console

export class CSPConfig {
    public pathFilters: RegExp[] = [/^\/e2e\//];
    public defaultSrc: string[] = ["'self'"];
    public scriptSrc: string[] = ["'unsafe-eval'", "'self'", 'https://demos.telerik.com'];
    public fontSrc: string[] = ["'self'", 'data:'];
    public styleSrc: string[] = ["'self'", 'https://maxcdn.bootstrapcdn.com'];
    public connectSrc: string[] = ["'self'", 'https://odatasampleservices.azurewebsites.net'];
    public imgSrc: string[] = ["'self'", 'data:'];

    constructor (init: Partial<CSPConfig> = {}) {
        Object.assign(this, init);
    }

    public get policy(): string {
        return [
            'default-src ' + this.defaultSrc.join(' '),
            'script-src ' + this.scriptSrc.join(' '),
            'font-src ' + this.fontSrc.join(' '),
            'style-src ' + this.styleSrc.join(' '),
            'connect-src ' + this.connectSrc.join(' '),
            'img-src ' + this.imgSrc.join(' ')
        ].join(';');
    }
}

@Injectable({
    providedIn: 'root'
})
export class CSPService {
    constructor(router: Router, @Optional() private config: CSPConfig) {
        if (!this.config) {
            this.config = new CSPConfig();
        }

        router.events.pipe(
            filter(event => event instanceof NavigationStart)
        ).subscribe((e: NavigationStart) => {
            const altURL = new URL(document.URL);
            const params = new URLSearchParams(altURL.search);
            const match = this.matchURL(e.url);

            if (params.get('csp') === 'false' || !match) {
                this.clearCSP();
            } else if (params.get('csp') === 'true' || match) {
                params.append('csp', 'false');
                console.info('Content Security Policy: Apply settings for e2e tests\n' + this.config.policy.replace(/;/g, '\n'));
                console.info(`Navigate to ${altURL} to disable CSP.`);

                this.applyCSP();
            }
        });
    }

    private matchURL(url: string): boolean {
        return this.config.pathFilters.reduce((match, filter) =>
            match || url.match(filter) !== null
        , false);
    }

    private applyCSP(): void {
        const meta = document.createElement('meta');
        meta.setAttribute('http-equiv', 'Content-Security-Policy');
        meta.setAttribute('content', this.config.policy);
        document.head.append(meta);
    }

    private clearCSP(): void {
        const meta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
        if (meta) {
            console.info('Content Security Policy: Reset');
            meta.parentElement.removeChild(meta);
        }
    }
}
