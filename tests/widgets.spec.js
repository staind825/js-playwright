const { test, expect } = require('@playwright/test');
const WidgetsPage = require('../page-objects/widgets.page');

test.describe('DemoQA Widgets Tests', () => {
    let widgetsPage;

    test.beforeEach(async ({ page }) => {
        widgetsPage = new WidgetsPage(page);
        await widgetsPage.navigateToWidgets();
    });

    test('should set slider value', async ({ page }) => {
        widgetsPage = new WidgetsPage(page);
        await widgetsPage.navigateToSlider();
        
        const targetValue = 75;
        await widgetsPage.setSliderValue(targetValue);
        const value = await widgetsPage.page.$eval('input[type="range"]', el => Number(el.value));
        
        expect(value).toBeGreaterThanOrEqual(targetValue - 2);
        expect(value).toBeLessThanOrEqual(targetValue + 2);
    });

    test('should set date', async ({ page }) => {
        widgetsPage = new WidgetsPage(page);
        await widgetsPage.navigateToDatePicker();
        
        const testDate = '03/15/2024';
        await widgetsPage.setDate(testDate);
        const dateValue = await widgetsPage.page.$eval('#datePickerMonthYearInput', el => el.value);
        expect(dateValue).toBe(testDate);
    });
}); 