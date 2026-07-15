export class CheckoutPage{

constructor(page){
    this.page = page;
    this.checkoutButton = page.locator('#checkout');
    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.postalCode = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.finishButton = page.locator('#finish');

}


checkoutFirstStep = async (firstname,lastname,postalcode) => {
    await this.checkoutButton.click();
    await this.firstName.fill (firstname);
    await this.lastName.fill (lastname);
    await this.postalCode.fill (postalcode);
    await this.continueButton.click();
    await this.page.waitForURL('https://www.saucedemo.com/checkout-step-two.html');
}

finishCheckout = async () => {
    await this.finishButton.click();
    await this.page.waitForURL('https://www.saucedemo.com/checkout-complete.html');;
    
}

}