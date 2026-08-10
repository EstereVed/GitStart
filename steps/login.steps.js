const { createBdd } = require('playwright-bdd');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../page_objects/LoginPage');

const { Given, When, Then } = createBdd();


Given('I am on Automation Exercise page', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await page.locator('button.fc-cta-consent').waitFor({ state: 'visible' });
    await page.locator('button.fc-cta-consent').click();
    
});

Given('I opened login page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.signupLoginButton.click();
    await page.waitForURL('https://automationexercise.com/login');
});

When('I enter username {string} and password {string}', async ({ page }, username, password) => {
    const loginPage = new LoginPage(page);
    await loginPage.username.fill(username);
    await loginPage.password.fill(password);
});

When('I click the login button', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginButton.click();
});

Then('login error is displayed', async ({ page }) => {
    const errorMessage = page.locator('xpath=//h2[contains(text(),\'Login to your account\')]/following::p[contains(text(),\'Your email or password is incorrect!\')]');
    await expect(errorMessage).toHaveText("Your email or password is incorrect!");
});

// Given('I am on the login page', async ({ page }) => {
//     await page.goto('https://www.saucedemo.com/');
// });

// When('I enter username {string} and password {string}', async ({ page }, username, password) => {
//     const loginPage = new LoginPage(page);
//     await loginPage.username.fill(username);
//     await loginPage.password.fill(password);
// });

// Then('I click the submit button', async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     await loginPage.loginButton.click();
//     await page.waitForURL('https://www.saucedemo.com/inventory.html')
// });