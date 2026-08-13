export class FormPage{

    constructor(page){
    this.page = page; 
    this.nameField = page.locator('#name');
    this.emailField = page.locator('#email');
    this.phoneNumberField = page.locator('#phone');
    this.addressField = page.locator('#textarea');
    this.genderRadioButton = page.locator('input[type="radio"][value="female"]');
    this.daysCheckbox = page.locator('input[type="checkbox"][value="monday"]');
    this.countryList = page.locator('#country');
    this.colorList = page.locator('#colors');
    this.animalsList = page.locator('#animals');
    this.datePicker1 = page.locator('#datepicker');
    this.datePicker2 = page.locator('#txtDate');
    this.startDate = page.locator('#start-date');
    this.endDate = page.locator('#end-date');
    this.submitButton = page.locator('.submit-btn');
    this.calculatedRange = page.locator('#result');
    this.firstHandle = page.locator('[class*="ui-slider-handle ui-corner-all"]').first();
    this.secondHandle = page.locator('[class*="ui-slider-handle ui-corner-all"]').nth(1);
    this.slideBar = page.locator('#slider-range');
}
}