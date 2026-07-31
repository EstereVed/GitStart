export class LoginPage{

constructor(page){
    this.page = page;
    //this.username = page.locator('#user-name');
    //this.password = page.locator('#password');
    //this.loginButton = page.locator('#login-button');

    //Xpath:
    this.username = page.locator('xpath =//*[@id="user-name"]');
    //this.password = page.locator('xpath =//div[@class ="input_error form_input"][last()]');
    this.password = page.locator('xpath =//*[@id ="password"]');
    //this.loginButton = page.locator('xpath = //*[@id ="login-button"]');
    this.loginButton = page.locator('xpath = //*[@name ="login-button"]');
}

//bdd šitos dalies nereikia:

// userLoginWithPassword = async (username,password) => {
//     await this.page.goto('https://www.saucedemo.com/');
//     await this.username.fill (username);
//     await this.password.fill (password);
//     await this.loginButton.click();
// }

}