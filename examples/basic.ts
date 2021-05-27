import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BaseModule } from '@progress/kendo-angular-component-base';

@Component({
    selector: 'my-app',
    template: `
      <kendo-component></kendo-component>
    `
})
export class AppComponent {
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        RouterModule.forChild(
            [{
                path: '',
                component: AppComponent
            }]
        ),
        CommonModule,
        BaseModule
    ]
})
export class AppModule {}
