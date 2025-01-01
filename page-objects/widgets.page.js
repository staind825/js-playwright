const BasePage = require('./base.page');

class WidgetsPage extends BasePage {
    constructor(page) {
        super(page);
        
        // Locators
        this.accordianMenu = 'span:text("Accordian")';
        this.datePickerMenu = 'span:text("Date Picker")';
        this.sliderMenu = 'span:text("Slider")';
        this.datePickerInput = '#datePickerMonthYearInput';
        this.slider = 'input[type="range"]';
        this.sliderValue = '#sliderValue';
    }

    async navigateToWidgets() {
        await this.navigate('/widgets');
    }

    async navigateToDatePicker() {
        await this.navigate('/date-picker');
    }

    async navigateToSlider() {
        await this.navigate('/slider');
        await this.page.waitForSelector(this.slider);
    }

    async setSliderValue(value) {
        const slider = await this.page.$(this.slider);
        const sliderBounds = await slider.boundingBox();
        
        await this.page.mouse.move(
            sliderBounds.x + sliderBounds.width * (value / 100),
            sliderBounds.y + sliderBounds.height / 2
        );
        await this.page.mouse.down();
        await this.page.mouse.up();
    }

    async setDate(date) {
        await this.page.waitForSelector(this.datePickerInput);
        await this.page.click(this.datePickerInput);
        await this.page.fill(this.datePickerInput, date);
        await this.page.keyboard.press('Enter');
    }
}

module.exports = WidgetsPage; 