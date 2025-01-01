const BasePage = require('./base.page');

class AlertsPage extends BasePage {
    constructor(page) {
        super(page);
        
        // Locators
        this.alertButton = '#alertButton';
        this.confirmButton = '#confirmButton';
        this.promtButton = '#promtButton';
        this.confirmResult = '#confirmResult';
        this.promptResult = '#promptResult';
    }

    async navigateToAlerts() {
        await this.navigate('/alerts');
    }

    async triggerAlert() {
        await this.page.click(this.alertButton);
    }

    async handleConfirmAlert(accept = true) {
        // Setup alert handler
        this.page.on('dialog', async dialog => {
            accept ? await dialog.accept() : await dialog.dismiss();
        });
        
        await this.page.click(this.confirmButton);
    }

    async handlePromptAlert(text) {
        // Setup prompt handler
        this.page.on('dialog', async dialog => {
            await dialog.accept(text);
        });
        
        await this.page.click(this.promtButton);
    }
}

module.exports = AlertsPage; 