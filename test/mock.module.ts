import { NgModule, Component } from '@angular/core';

@Component({
  selector: 'kendo-component',
  template: `
     <div>A sample Kendo UI for Angular Component</div>
     <div>{{ greeting }}</div>
   `
})
export class MockComponent {

    public greeting: string = "Hello";

    constructor() {}
}
/**
 * Sample module
 */
@NgModule({
    declarations: [ MockComponent ],
    exports: [ MockComponent ]
})
export class MockModule {}
