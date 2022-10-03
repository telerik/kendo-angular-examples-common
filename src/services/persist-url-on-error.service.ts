import { NavigationError, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PersistUrlOnErrorService {
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
