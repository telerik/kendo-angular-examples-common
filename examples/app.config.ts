import { Routes } from '@angular/router';

const EXAMPLES: Routes = [{
    path: 'basic.html',
    loadChildren: 'examples/basic#AppModule'
}];

const E2E: Routes = [{
    path: 'e2e/basic.html',
    loadChildren: 'examples/e2e/basic#AppModule'
}];

export const ROUTES = [...EXAMPLES, ...E2E];

