import { test, expect } from '@playwright/test';
import { LoginPage } from '../page_objects/LoginPage'; 
import { CartPage } from '../page_objects/CartPage';
import { CheckoutPage } from '../page_objects/CheckoutPage';

test('pirmas testas', async ({ page }) => {
    

    //2026-06-30:
    const loginPage = new LoginPage(page);
    const cartPage = new CartPage (page);
    const checkoutPage =new CheckoutPage (page);
    
    loginPage.userLoginWithPassword('standard_user','secret_sauce');
    cartPage.addItemToCart();
    checkoutPage.checkoutFirstStep('Vardenis','Pavardenis','12345');
    checkoutPage.finishCheckout();

    await page.pause();

    
});

 //2026-07-02:
 //susirasti metodą, kuris patikrina tekstą
 //test.only prarunnina tik 1 testą

test('patikrinti teksta', async ({ page }) => {
    

    //2026-06-30:
    const loginPage = new LoginPage(page);
    const backPack = page.locator ('[data-test="inventory-item-name"]').first();
    
    loginPage.userLoginWithPassword('standard_user','secret_sauce');
    await expect(backPack).toHaveText("Sauce Labs Backpack");

    
});

//2026-07-14:
//pasidaryti branchą, sudėti visus test failus į git'ą 
//pasirašyti for, kad įdėtų visas prekes į krepšelį ir patikrinti, kad įdėtos 6 prekės
test('add all items to cart', async ({ page }) => {
    
    const loginPage = new LoginPage(page);
    const cartPage = new CartPage (page);
    const cartBadge = page.locator ('.shopping_cart_badge');
        
    loginPage.userLoginWithPassword('standard_user','secret_sauce');
    cartPage.addAllItemsToCart();
    
    await expect(cartBadge).toHaveText("6");

    
});