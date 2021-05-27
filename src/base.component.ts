import { Component, HostBinding } from '@angular/core';
import { validatePackage } from '@progress/kendo-licensing';
import { packageMetadata } from './package-metadata';
import { greeting } from './util';

/**
 * A sample component
 */
@Component({
  selector: 'kendo-component',
  template: `
     <div>A sample Kendo UI for Angular Component</div>
     <div>{{ greeting }}</div>
   `
})
export class BaseComponent {
    @HostBinding('class.k-widget')
    public className: boolean = true;

    public greeting: string = greeting;

    constructor() {
        validatePackage(packageMetadata);
    }
}
