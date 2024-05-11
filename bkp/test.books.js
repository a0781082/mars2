import { expect, browser, $ } from '@wdio/globals'
import { strictEqual } from 'assert'
import AxeBuilder from '@axe-core/webdriverio'

describe('Deque Candidate Automation Tests', () => {
    it('load the Deque Mars page in my browser', async () => {
        await browser.url(`http://localhost:9000/books.html`)

        const mainNav = await browser.$('#navigation'); 
        const isDisplayed = await mainNav.isDisplayed();

        strictEqual(isDisplayed, true, 'Main navigation is not loaded');
    })

    it('searches for Harry Potter', async () => {
        const searchString = await $('#txtInput');
        await browser.pause(1000);
        await searchString.setValue('Harry Potter')
        await browser.pause(1000);
        const button = await $('#bookSearchButton');
        await button.click()
        await browser.pause(1000);
        const tableLoaded = await browser.$('#bookTable');
        await browser.pause(1000);

        //strictEqual(tableLoaded, true, 'Table Not Loaded')

    })

    
    it('and gather the accessibility scan results', async () => {
        const builder = new AxeBuilder({ client: browser })
        const result = await builder.analyze()
        console.log('Acessibility Results:', result)
    })

})