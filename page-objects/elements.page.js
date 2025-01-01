const BasePage = require('./base.page');

class ElementsPage extends BasePage {
    constructor(page) {
        super(page);
        
        // Locators
        this.textBoxMenu = 'span:text("Text Box")';
        this.fullNameInput = '#userName';
        this.emailInput = '#userEmail';
        this.currentAddressInput = '#currentAddress';
        this.permanentAddressInput = '#permanentAddress';
        this.submitButton = '#submit';
        this.outputBox = '#output';
    }

    async navigateToElements() {
        await this.navigate('/elements');
    }

    async clickTextBox() {
        await this.page.click(this.textBoxMenu);
    }

    async fillTextBoxForm(userData) {
        await this.page.fill(this.fullNameInput, userData.fullName);
        await this.page.fill(this.emailInput, userData.email);
        await this.page.fill(this.currentAddressInput, userData.currentAddress);
        await this.page.fill(this.permanentAddressInput, userData.permanentAddress);
    }

    async submitForm() {
        await this.page.click(this.submitButton);
    }

    async getOutputText() {
        return await this.page.textContent(this.outputBox);
    }
}

module.exports = ElementsPage; 