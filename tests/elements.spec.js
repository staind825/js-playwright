const { test, expect } = require('@playwright/test');
const ElementsPage = require('../page-objects/elements.page');

test.describe('DemoQA Elements Tests', () => {
    let elementsPage;

    test.beforeEach(async ({ page }) => {
        elementsPage = new ElementsPage(page);
        await elementsPage.navigateToElements();
    });

    test('should fill and submit text box form', async () => {
        // Test data
        const userData = {
            fullName: 'John Doe',
            email: 'john@example.com',
            currentAddress: '123 Current St',
            permanentAddress: '456 Permanent Ave'
        };

        // Test steps
        await elementsPage.clickTextBox();
        await elementsPage.fillTextBoxForm(userData);
        await elementsPage.submitForm();

        // Assertions
        const outputText = await elementsPage.getOutputText();
        expect(outputText).toContain(userData.fullName);
        expect(outputText).toContain(userData.email);
        expect(outputText).toContain(userData.currentAddress);
        expect(outputText).toContain(userData.permanentAddress);
    });
}); 