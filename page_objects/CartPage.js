export class CartPage{

constructor(page){
    this.page = page;
    this.addToCartButton = page.locator('.btn.btn_primary.btn_small.btn_inventory').first();
    this.openCart = page.locator('#shopping_cart_container');
}

addItemToCart = async () => {
    await this.addToCartButton.click();
    await this.openCart.click();
    await this.page.waitForURL('https://www.saucedemo.com/cart.html');
}

addAllItemsToCart = async () => {
    for(let i=1; i<=6; i++){
       await this.addToCartButton.click(); 
    }
    await this.openCart.click();
    await this.page.waitForURL('https://www.saucedemo.com/cart.html');
}

}