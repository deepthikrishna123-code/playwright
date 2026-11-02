Feature:End to End Test
Scenario: Buy a product
    Given Enter "standard_user" and "secret_sauce"
    When add "Sauce Labs Backpack" to the cart
    Then verify "Sauce Labs Backpack" is add to the cart
    When valid "Deepthi","Krishna","121212" added
    Then checked order confirmation