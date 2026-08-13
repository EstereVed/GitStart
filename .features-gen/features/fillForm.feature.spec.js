// Generated from: features\fillForm.feature
import { test } from "playwright-bdd";

test.describe('fill form', () => {

  test('fill all fields in the form', async ({ Given, When, And, page }) => { 
    await Given('user opened Data Entry Form page', null, { page }); 
    await When('user enters name "Test Name"', null, { page }); 
    await And('user enters email "test@test.lt"', null, { page }); 
    await And('user enters phone number "1234567890"', null, { page }); 
    await And('user enters address "Testing street 15-6, Test"', null, { page }); 
    await And('user selects gender', null, { page }); 
    await And('user selects days', null, { page }); 
    await And('user selects country', null, { page }); 
    await And('user selects color', null, { page }); 
    await And('user selects animal', null, { page }); 
    await And('user selects first date', null, { page }); 
    await And('user selects second date', null, { page }); 
    await And('user selects date range', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\fillForm.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given user opened Data Entry Form page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When user enters name \"Test Name\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Test Name\"","children":[{"start":18,"value":"Test Name","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And user enters email \"test@test.lt\"","stepMatchArguments":[{"group":{"start":18,"value":"\"test@test.lt\"","children":[{"start":19,"value":"test@test.lt","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And user enters phone number \"1234567890\"","stepMatchArguments":[{"group":{"start":25,"value":"\"1234567890\"","children":[{"start":26,"value":"1234567890","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And user enters address \"Testing street 15-6, Test\"","stepMatchArguments":[{"group":{"start":20,"value":"\"Testing street 15-6, Test\"","children":[{"start":21,"value":"Testing street 15-6, Test","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And user selects gender","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And user selects days","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And user selects country","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And user selects color","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And user selects animal","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And user selects first date","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And user selects second date","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And user selects date range","stepMatchArguments":[]}]},
]; // bdd-data-end