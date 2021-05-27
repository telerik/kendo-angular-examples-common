import { Component, ChangeDetectorRef, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BaseModule } from '@progress/kendo-angular-component-base';

@Component({
    selector: 'my-app',
    template: `
        <kendo-component *ngIf="visible"></kendo-component>
        <button id="reset" (click)="reset()">Reset</button>
    `
})
export class AppComponent {
    public visible: boolean = true;

    constructor(private cd: ChangeDetectorRef) {
    }

    public reset(): void {
        this.visible = false;
        this.cd.detectChanges();

        this.visible = true;
    }
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
