import {
    browser,
    by,
    element
} from '@progress/kendo-angular-e2e';

describe('base component', () => {
    beforeAll(async () => {
        await browser.get('/examples/e2e/basic.html');
        await browser.waitForAngular();
    });

    beforeEach(async() => {
        await element(by.id('reset')).click();
    });

    it('should render a k-widget class', async () => {
        const host = element(by.css('kendo-component.k-widget'));
        expect(await host.isPresent()).toBe(true);
    });
});
