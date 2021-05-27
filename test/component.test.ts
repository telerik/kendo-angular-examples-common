import {
    async,
    TestBed
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { BaseModule } from '../src/base.module';

describe('kendo-angular-component', () => {
    @Component({
        template: ''
    })
    class TestComponent {}

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent],
            imports: [BaseModule]
        });
    }));

    it('should render a div', () => {
        const template: string = '<kendo-component></kendo-component>';
        TestBed.overrideComponent(TestComponent, {set: { template }});
        const fixture: any = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        let compiled: any = fixture.debugElement.nativeElement.children[0];
        expect(compiled.children[0].tagName).toBe('DIV');
    });
});
