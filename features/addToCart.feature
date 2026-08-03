Feature: Add Items to Cart

    Scenario: Item successfully added to cart
        Given I logged in with valid credentials - username "standard_user" and password "secret_sauce"
        When I click add to cart button
        Then Check item count in the cart

    Scenario: All items successfully added to cart
        Given I logged in with valid credentials - username "standard_user" and password "secret_sauce"
        When I click add to cart button multiple times to add all items
        Then Check all items count in the cart