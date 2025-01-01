const BasePage = require('./base.page');

class FormsPage extends BasePage {
    constructor(page) {
        super(page);
        
        // Locators
        this.practiceFormMenu = 'span:text("Practice Form")';
        this.firstNameInput = '#firstName';
        this.lastNameInput = '#lastName';
        this.emailInput = '#userEmail';
        this.genderMaleRadio = 'label[for="gender-radio-1"]';
        this.mobileInput = '#userNumber';
        this.submitButton = '#submit';
        this.confirmationModal = '.modal-content';
    }

    async navigateToForms() {
        await this.navigate('/forms');
    }

    async fillStudentForm(studentData) {
        await this.page.click(this.practiceFormMenu);
        await this.page.fill(this.firstNameInput, studentData.firstName);
        await this.page.fill(this.lastNameInput, studentData.lastName);
        await this.page.fill(this.emailInput, studentData.email);
        await this.page.click(this.genderMaleRadio);
        await this.page.fill(this.mobileInput, studentData.mobile);
    }

    async submitForm() {
        await this.page.click(this.submitButton);
    }

    async getConfirmationText() {
        return await this.page.textContent(this.confirmationModal);
    }
}

module.exports = FormsPage; 