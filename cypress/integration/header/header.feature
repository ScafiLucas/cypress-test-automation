
Feature: Validate header component actions and links

    Background: Login
        Given I am at the login page
        When I enter my login username and password
        Then I click Log In

    Scenario: Validate Test Automation Page Link
        Given I am on the Automation Screen
        When I click the Test Automation Link
        Then I should see the Test Automation Page loaded

     Scenario: Validate Page 1 Link
        Given I am on the Automation Screen
        When I click the Page 1 link
        Then I should see the Page 1 loaded   

    Scenario: Validate Page 2 Link
        Given I am on the Automation Screen
        When I click the Page 2 link
        Then I should see the Page 2 loaded

    Scenario: Validate Page 3 Link
        Given I am on the Automation Screen
        When I click the Page 3 link
        Then I should see the Page 3 loaded
 