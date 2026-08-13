import {request, expect} from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { FormPage } from '../page_objects/FormPage';

const { Given, When, Then } = createBdd();

Given ('user opened Data Entry Form page', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/');
});

When ('user enters name {string}', async ({page}, name) =>{
    const formPage = new FormPage(page);
    await formPage.nameField.fill(name);
    // await page.pause();
});

When ('user enters email {string}', async ({page}, email) =>{
    const formPage = new FormPage(page);
    await formPage.emailField.fill(email);
    // await page.pause();
});

When ('user enters phone number {string}', async ({page}, phone) =>{
    const formPage = new FormPage(page);
    await formPage.phoneNumberField.fill(phone);
    // await page.pause();
});

When ('user enters address {string}', async ({page}, address) =>{
    const formPage = new FormPage(page);
    await formPage.addressField.fill(address);
    // await page.pause();
});

When ('user selects gender', async ({page}) =>{
    const formPage = new FormPage(page);
    await formPage.genderRadioButton.check();
    // await page.pause();
});

When ('user selects days', async ({page}) =>{
    const formPage = new FormPage(page);
    await formPage.daysCheckbox.check();
    // await page.pause();
});

When ('user selects country', async ({page}) =>{
    const formPage = new FormPage(page);
    //await formPage.countryList.click();
    await formPage.countryList.selectOption('Germany');
    // await page.pause();
});

When ('user selects color', async ({page}) =>{
    const formPage = new FormPage(page);
    await formPage.colorList.selectOption('Green');
    // await page.pause();
});

When ('user selects animal', async ({page}) =>{
    const formPage = new FormPage(page);
    await formPage.animalsList.selectOption('Dog');
    // await page.pause();
});

When ('user selects first date', async ({page}) =>{
    const formPage = new FormPage(page);
    await formPage.datePicker1.fill('08/11/2026');
    // await page.pause();
});

When ('user selects second date', async ({page}) =>{
    const formPage = new FormPage(page);
    const date = page.locator('xpath=//*[@id="ui-datepicker-div"]/table/tbody/tr[2]/td[5]/a');
    await formPage.datePicker2.click();
    await date.click();
    // await page.pause();
});

When ('user selects date range', async ({page}) =>{
    const formPage = new FormPage(page);
    await formPage.startDate.fill('2026-08-08');
    await formPage.endDate.fill('2026-08-11');
    await formPage.submitButton.click();
    await expect(formPage.calculatedRange).toHaveText('You selected a range of 3 days.');
    // await page.pause();
});


// Then ('fields are filled', async ({page}) =>{
//     const formPage = new FormPage(page);
//     await expect (formPage.nameField).toHaveText('Test Name');
// });