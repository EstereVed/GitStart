// Generated from: features\login.feature
import { test } from "playwright-bdd";

test.describe('User Login', () => {

  test('Login with invalid credentials AE', async ({ Given, When, Then, And, page }) => { 
    await Given('I am on Automation Exercise page', null, { page }); 
    await And('I opened login page', null, { page }); 
    await When('I enter username "test@email.com" and password "testPass"', null, { page }); 
    await And('I click the login button', null, { page }); 
    await Then('login error is displayed', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I am on Automation Exercise page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"And I opened login page","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When I enter username \"test@email.com\" and password \"testPass\"","stepMatchArguments":[{"group":{"start":17,"value":"\"test@email.com\"","children":[{"start":18,"value":"test@email.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":47,"value":"\"testPass\"","children":[{"start":48,"value":"testPass","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And I click the login button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then login error is displayed","stepMatchArguments":[]}]},
]; // bdd-data-end