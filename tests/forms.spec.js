const { test, expect } = require('@playwright/test');
const FormsPage = require('../page-objects/forms.page');

test.describe('DemoQA Forms Tests', () => {
    let formsPage;

    test.beforeEach(async ({ page }) => {
        formsPage = new FormsPage(page);
        await formsPage.navigateToForms();
    });

    test('should submit student registration form', async () => {
        const studentData = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@example.com',
            mobile: '1234567890'
        };

        await formsPage.fillStudentForm(studentData);
        await formsPage.submitForm();

        const confirmationText = await formsPage.getConfirmationText();
        expect(confirmationText).toContain(studentData.firstName);
        expect(confirmationText).toContain(studentData.email);
    });
}); 