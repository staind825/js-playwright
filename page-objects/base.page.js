class BasePage {
    constructor(page) {
        this.page = page;
        this.baseURL = 'https://demoqa.com';
    }

    async navigate(path) {
        await this.page.goto(`${this.baseURL}${path}`);
    }

    async waitForElement(selector) {
        await this.page.waitForSelector(selector);
    }
}

module.exports = BasePage; 