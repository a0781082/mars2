import { expect, browser, $ } from '@wdio/globals'
import { strictEqual } from 'assert'
import AxeBuilder from '@axe-core/webdriverio'

describe('Deque Candidate Automation Tests', () => {
    it('load the Deque Mars page in my browser', async () => {
        await browser.url(`https://dequeuniversity.com/demo/mars`)

        const mainNav = await browser.$('#main-nav'); 
        const isDisplayed = await mainNav.isDisplayed();

        strictEqual(isDisplayed, true, 'Main navigation is not loaded');
    })

    it('and gather the accessibility scan results', async () => {
        const builder = new AxeBuilder({ client: browser })
        const result = await builder.analyze()
        console.log('Acessibility Results:', result)
        strictEqual(result.violations.length, true, "Accessibility Issues Found")
    })

})