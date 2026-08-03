const { createBdd } = require('playwright-bdd');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../page_objects/LoginPage');
const { CartPage } = require('../page_objects/CartPage');

const { Given, When, Then } = createBdd();

Given('I logged in with valid credentials - username {string} and password {string}', async({ page}, username, password) =>{
    await page.goto('https://www.saucedemo.com/');
    const loginPage = new LoginPage(page);
    await loginPage.username.fill(username);
    await loginPage.password.fill(password);
    await loginPage.loginButton.click();
});

// Given('I am on the item page', async ({ page }) => {
//     await page.goto('https://www.saucedemo.com/inventory.html');
// });

When('I click add to cart button', async({ page }) => {
    const cartPage = new CartPage(page); 
    await cartPage.addToCartButton.first().click();
});


Then ('Check item count in the cart', async({ page }) =>{
    const cartPage = new CartPage(page);
    await expect(cartPage.cartBadge).toHaveText("1");
});

When('I click add to cart button multiple times to add all items', async({ page }) => {
    const cartPage = new CartPage(page); 
    const itemCount = await cartPage.addToCartButton.count();
    for (let i=0; i<itemCount; i++ ){
        await cartPage.addToCartButton.first().click();
    }
});

Then ('Check all items count in the cart', async({ page }) =>{
    const cartPage = new CartPage(page);
    const itemCount = await cartPage.addToCartButton.count();
    await expect(cartPage.cartBadge).toHaveText("6");
});