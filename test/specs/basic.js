const assert = require('assert');

describe('webdriver io demo', () =>{
    it('should have the right title', () => {
        console.log('first webdriver io test')
        browser.url('https://webdriver.io');
        const title = browser.getTitle();
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
    });
});