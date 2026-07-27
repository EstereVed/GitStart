import { test, expect } from '@playwright/test';
import { LoginPage } from '../page_objects/LoginPage'; 
import { CartPage } from '../page_objects/CartPage';
import { CheckoutPage } from '../page_objects/CheckoutPage';

test('pirmas testas', async ({ page }) => {
    

    //2026-06-30:
    const loginPage = new LoginPage(page);
    const cartPage = new CartPage (page);
    const checkoutPage =new CheckoutPage (page);
    
    await loginPage.userLoginWithPassword('standard_user','secret_sauce');
    await cartPage.addItemToCart();
    await checkoutPage.checkoutFirstStep('Vardenis','Pavardenis','12345');
    await checkoutPage.finishCheckout();

    
    
});

 //2026-07-02:
 //susirasti metodą, kuris patikrina tekstą
 //test.only prarunnina tik 1 testą

test('patikrinti teksta', async ({ page }) => {
    

    //2026-06-30:
    const loginPage = new LoginPage(page);
    const backPack = page.locator ('[data-test="inventory-item-name"]').first();
    
    await loginPage.userLoginWithPassword('standard_user','secret_sauce');
    await expect(backPack).toHaveText("Sauce Labs Backpack");

    
});

//2026-07-14:
//pasidaryti branchą, sudėti visus test failus į git'ą 
//pasirašyti for, kad įdėtų visas prekes į krepšelį ir patikrinti, kad įdėtos 6 prekės
test('add 6 items to cart', async ({ page }) => {
    
    const loginPage = new LoginPage(page);
    const cartPage = new CartPage (page);
    const cartBadge = page.locator ('.shopping_cart_badge');
        
    await loginPage.userLoginWithPassword('standard_user','secret_sauce');
    await cartPage.addSixItemsToCart();
    
    await expect(cartBadge).toHaveText("6");

    
});

//2026-07-16:
//susirasti kiek itemų ir pasirašyti for, kad apskaičiuotų neįhardkodintą skaičių itemų
//iškviesti metodą kuri paduodamas css selector, kuris bus naudojamas kaip parametras
test('add all items to cart', async ({ page }) => {
    
    const loginPage = new LoginPage(page);
    const cartPage = new CartPage (page);
    //const addToCartButton = page.locator('.btn.btn_primary.btn_small.btn_inventory').first();
    const cartBadge = page.locator ('.shopping_cart_badge');
    //var itemCount = page.locator('.btn.btn_primary.btn_small.btn_inventory').count();
    
    await loginPage.userLoginWithPassword('standard_user','secret_sauce');
    await cartPage.addAllItemsToCart('.btn.btn_primary.btn_small.btn_inventory');
    /*for(let i=1; i<=itemCount; i++){
       await this.addToCartButton.click(); 
    }*/
    await expect(cartBadge).toHaveText("6")
    
    await page.pause();      
});