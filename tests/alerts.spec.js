const { test, expect } = require('@playwright/test');
const AlertsPage = require('../page-objects/alerts.page');

test.describe('DemoQA Alerts Tests', () => {
    let alertsPage;

    test.beforeEach(async ({ page }) => {
        alertsPage = new AlertsPage(page);
        await alertsPage.navigateToAlerts();
    });

    test('should handle confirm alert - Accept', async () => {
        await alertsPage.handleConfirmAlert(true);
        const result = await alertsPage.page.textContent('#confirmResult');
        expect(result).toContain('Ok');
    });

    test('should handle prompt alert', async () => {
        const testText = 'Hello World';
        await alertsPage.handlePromptAlert(testText);
        const result = await alertsPage.page.textContent('#promptResult');
        expect(result).toContain(testText);
    });
}); 