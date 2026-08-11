Feature: User Login

    # Scenario: Successful login with valid credentials
    #     Given I am on the login page
    #     When I enter username "standard_user" and password "secret_sauce"
    #     Then I click the submit button

    Scenario: Login with invalid credentials AE
        Given I am on Automation Exercise page
        And I opened login page
        When I enter username "test@email.com" and password "testPass"
        And I click the login button
        Then login error is displayed

    