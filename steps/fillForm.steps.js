import {request, expect} from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { FormPage } from '../page_objects/FormPage';

const { Given, When, Then } = createBdd();

Given ('user opened Data Entry Form page', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/');
});

When ('user enters name {string}, email {string}, phone number {string} and address {string}', async ({page}, name, email, phone, address) =>{
    const formPage = new FormPage(page);
    await formPage.nameField.fill(name);
    await formPage.emailField.fill(email);
    await formPage.phoneNumberField.fill(phone);
    await formPage.addressField.fill(address);
    // await page.pause();
});

When ('user selects gender and days', async ({page}) =>{
    const formPage = new FormPage(page);
    await formPage.genderRadioButton.check();
    await formPage.daysCheckbox.check();
    // await page.pause();
});

When ('user selects country, color and animal', async ({page}) =>{
    const formPage = new FormPage(page);
    //await formPage.countryList.click();
    await formPage.countryList.selectOption('Germany');
    await formPage.colorList.selectOption('Green');
    await formPage.animalsList.selectOption('Dog');
    // await page.pause();
});

When ('user selects dates', async ({page}) =>{
    const formPage = new FormPage(page);
    await formPage.datePicker1.fill('08/11/2026');

    const date = page.locator('xpath=//*[@id="ui-datepicker-div"]/table/tbody/tr[2]/td[5]/a');
    await formPage.datePicker2.click();
    await date.click();

    await formPage.startDate.fill('2026-08-08');
    await formPage.endDate.fill('2026-08-11');
    // await page.pause();
});

Then ('correct date range is displayed', async ({page}) =>{
    const formPage = new FormPage(page);
    await formPage.submitButton.click();
    await expect(formPage.calculatedRange).toHaveText('You selected a range of 3 days.');
    // await page.pause();
});

When('user selects first value', async({page}) =>{
    const formPage = new FormPage(page); 
    await formPage.slideBar.waitFor({state:'visible'});
    await formPage.firstHandle.scrollIntoViewIfNeeded();
    
    const targetValue = 100;
    await formPage.firstHandle.focus();
    await page.keyboard.press('Home');

    for (let i = 0; i < targetValue; i++){
        await page.keyboard.press('ArrowRight');
    }
    
    // await page.pause();
    
});

When('user selects second value', async({page}) =>{
    const formPage = new FormPage(page); 
    await formPage.slideBar.waitFor({state:'visible'});
    await formPage.secondHandle.scrollIntoViewIfNeeded();
    
    const targetValue = 300;
    await formPage.secondHandle.focus();
    await page.keyboard.press('End');

    for (let i = 500; i > targetValue; i--){
        await page.keyboard.press('ArrowLeft');
    }

    // await page.pause();
    
});

Then ('correct price range displayed', async ({page}) => {
    const formPage = new FormPage(page); 
    await expect(formPage.firstHandle).toHaveAttribute('style', /left\s*:\s*20%\s*;?/);
    await expect(formPage.secondHandle).toHaveAttribute('style', /left\s*:\s*60%\s*;?/);
});

