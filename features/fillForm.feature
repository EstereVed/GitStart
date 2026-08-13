Feature: fill form

Scenario: fill all fields in the form
Given user opened Data Entry Form page
When user enters name "Test Name", email "test@test.lt", phone number "1234567890" and address "Testing street 15-6, Test"
And user selects gender and days
And user selects country, color and animal
And user selects dates
Then correct date range is displayed

Scenario: select range from 100 to 300
Given user opened Data Entry Form page
When user selects first value
And user selects second value
Then correct price range displayed