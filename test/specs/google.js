const assert = require('assert');

describe('first test to launch google', () => {
    it ('should have search box', () => {
        browser.url('https://www.google.ca');
        const title = browser.getTitle();
        assert.strictEqual(title, 'Google');
    });
});