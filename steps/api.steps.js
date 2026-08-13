// import {request, expect} from '@playwright/test';
// import { createBdd } from 'playwright-bdd';
// const { LoginPage } = require('../page_objects/LoginPage');
// const { Given, When, Then } = createBdd();

// const randomNumberString = Math.floor(Math.random() * 10000).toString();
// const randomEmail  = 'testEmail' + randomNumberString + '@mail.com';
// const randomPassword = 'pass!' + randomNumberString;


// // Given('Run api call get productList', async function () {
// //   const apiContext = await request.newContext();
 
// //   const response = await apiContext.get(
// //     'https://automationexercise.com/api/productsList'
// //   );
// //   expect(response.ok()).toBeTruthy();
// //   const body = await response.json();
// //   console.log(body);
// //   await apiContext.dispose();
// // });
 

// // console.log(randomEmail)
// // console.log(randomPassword)

// Given('Run api call to create user account', async function () {
//     const apiContext = await request.newContext();

//     const response = await apiContext.post(
//         'https://automationexercise.com/api/createAccount',
//     {
//       form: {
//         name: 'John Doe' + randomNumberString,
//         email: randomEmail,
//         password: randomPassword,
//         title: 'Mr',
//         birth_date: '15',
//         birth_month: '05',
//         birth_year: '1990',
//         firstname: 'John',
//         lastname: 'Doe',
//         company: 'QA Corp',
//         address1: '123 Main Street',
//         address2: 'Apt 4B',
//         country: 'United States',
//         zipcode: '10001',
//         state: 'New York',
//         city: 'New York',
//         mobile_number: '1234567890'
//       }
//     })

 
//   // Verify HTTP status is OK (200)
//   expect(response.ok()).toBeTruthy();
//   const body = await response.json();
//   console.log('Response Body:', body);
//   expect(body.responseCode).toBe(201);
//   expect(body.message).toBe('User created!');
 
//   await apiContext.dispose();
// });

// When('I enter valid credentials', async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     await loginPage.tryClickConsent();
//     await loginPage.username.fill(randomEmail);
//     await loginPage.password.fill(randomPassword);
//     await page.pause();
// });

// Then('User is logged in', async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     const loggoutButton = page.locator('xpath=//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]/a');
//     await loginPage.tryClickConsent();
//     await expect(loggoutButton).toContainText(" Logout");
// });


