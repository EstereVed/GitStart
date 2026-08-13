// Generated from: features\fillForm.feature
import { test } from "playwright-bdd";

test.describe('fill form', () => {

  test('fill all fields in the form', async ({ Given, When, Then, And, page }) => { 
    await Given('user opened Data Entry Form page', null, { page }); 
    await When('user enters name "Test Name", email "test@test.lt", phone number "1234567890" and address "Testing street 15-6, Test"', null, { page }); 
    await And('user selects gender and days', null, { page }); 
    await And('user selects country, color and animal', null, { page }); 
    await And('user selects dates', null, { page }); 
    await Then('correct date range is displayed', null, { page }); 
  });

  test('select range from 100 to 300', async ({ Given, When, Then, And, page }) => { 
    await Given('user opened Data Entry Form page', null, { page }); 
    await When('user selects first value', null, { page }); 
    await And('user selects second value', null, { page }); 
    await Then('correct price range displayed', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\fillForm.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given user opened Data Entry Form page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When user enters name \"Test Name\", email \"test@test.lt\", phone number \"1234567890\" and address \"Testing street 15-6, Test\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Test Name\"","children":[{"start":18,"value":"Test Name","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":36,"value":"\"test@test.lt\"","children":[{"start":37,"value":"test@test.lt","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":65,"value":"\"1234567890\"","children":[{"start":66,"value":"1234567890","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":90,"value":"\"Testing street 15-6, Test\"","children":[{"start":91,"value":"Testing street 15-6, Test","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And user selects gender and days","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And user selects country, color and animal","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And user selects dates","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then correct date range is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given user opened Data Entry Form page","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When user selects first value","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And user selects second value","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then correct price range displayed","stepMatchArguments":[]}]},
]; // bdd-data-end