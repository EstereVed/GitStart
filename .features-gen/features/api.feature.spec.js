// Generated from: features\api.feature
import { test } from "playwright-bdd";

test.describe('Api', () => {

  test('Register user', async ({ Given }) => { 
    await Given('Run api call to create user account'); 
  });

  test('Login with valid credentials AE', async ({ Given, When, Then, And, page }) => { 
    await Given('I am on Automation Exercise page', null, { page }); 
    await And('I opened login page', null, { page }); 
    await When('I enter valid credentials', null, { page }); 
    await And('I click the login button', null, { page }); 
    await Then('User is logged in', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\api.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given Run api call to create user account","stepMatchArguments":[]}]},
  {"pwTestLine":10,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":11,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given I am on Automation Exercise page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"And I opened login page","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I enter valid credentials","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And I click the login button","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then User is logged in","stepMatchArguments":[]}]},
]; // bdd-data-end