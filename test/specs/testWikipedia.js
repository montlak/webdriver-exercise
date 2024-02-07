const Page = require('../pageobjects/wikipedia/page')

describe('Test Wikipedia', () => {
    it('should open wikipedia page', async () => {
        await Page.open()
        await expect(browser).toHaveTitle('Wikipedia, the free encyclopedia')
        await Page.search('Linux')
        await expect(Page.title).toHaveText('Linux')
        await browser.pause(5000)
        await Page.goRandomArticle()
        await expect(Page.title).not.toHaveText('Linux')
        await expect(Page.buttonHome).toBeExisting()
        await browser.pause(5000)
        await Page.goHome()
    })
});