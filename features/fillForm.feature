Feature: fill form

Scenario: fill all fields in the form
Given user opened Data Entry Form page
When user enters name "Test Name"
And user enters email "test@test.lt"
And user enters phone number "1234567890"
And user enters address "Testing street 15-6, Test"
And user selects gender
And user selects days
And user selects country
And user selects color
And user selects animal
And user selects first date
And user selects second date
And user selects date range
# And user uploads one file
# Then fields are filled

