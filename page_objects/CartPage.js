export class CartPage{

constructor(page){
    this.page = page;
    this.addToCartButton = page.locator('#add-to-cart-sauce-labs-bolt-t-shirt');
    this.openCart = page.locator('#shopping_cart_container');

    this.checkoutButton = page.locator('#checkout');
    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.postalCode = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');

}

addItemToCart = async () => {
    await this.addToCartButton.click();
    await this.openCart.click();
    await this.page.waitForURL('https://www.saucedemo.com/cart.html');
}


}