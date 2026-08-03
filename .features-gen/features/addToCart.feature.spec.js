// Generated from: features\addToCart.feature
import { test } from "playwright-bdd";

test.describe('Add Items to Cart', () => {

  test('Item successfully added to cart', async ({ Given, When, Then, page }) => { 
    await Given('I logged in with valid credentials - username "standard_user" and password "secret_sauce"', null, { page }); 
    await When('I click add to cart button', null, { page }); 
    await Then('Check item count in the cart', null, { page }); 
  });

  test('All items successfully added to cart', async ({ Given, When, Then, page }) => { 
    await Given('I logged in with valid credentials - username "standard_user" and password "secret_sauce"', null, { page }); 
    await When('I click add to cart button multiple times to add all items', null, { page }); 
    await Then('Check all items count in the cart', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\addToCart.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I logged in with valid credentials - username \"standard_user\" and password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":46,"value":"\"standard_user\"","children":[{"start":47,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":75,"value":"\"secret_sauce\"","children":[{"start":76,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I click add to cart button","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Check item count in the cart","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I logged in with valid credentials - username \"standard_user\" and password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":46,"value":"\"standard_user\"","children":[{"start":47,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":75,"value":"\"secret_sauce\"","children":[{"start":76,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I click add to cart button multiple times to add all items","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then Check all items count in the cart","stepMatchArguments":[]}]},
]; // bdd-data-end