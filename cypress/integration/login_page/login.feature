
Feature: Validate all login functionality 

    Scenario: Login with success
        Given I am at the login page
        When I enter my login username and password
        And I click Log In
        Then the Test Automation page should be loaded

     Scenario: Login with empty credentials
        Given I am at the login page
        When I click Log In
        Then I must see the error message for both input elements

    Scenario: Login with empty username
        Given I am at the login page
        When I input my password value
        And I click Log In
        Then I must see the error message for empty input on username

    Scenario: Login with empty
        Given I am at the login page
        When I input my username value
        And I click Log In
        Then I must see the error message for empty input on password

    Scenario: Login with incorrect username
        Given I am at the login page
        When I input an invalid username
            And I input my password value
            And I click Log In
        Then I must see the error message for inccorect input 

    Scenario: Login with incorrect password    
        Given I am at the login page
        When I input my username value
            And I input an invalid password
            And I click Log In
        Then I must see the error message for inccorect input

    Scenario: Logout
        Given I am at the login page
        When I enter my login username and password
        And I click Log In
        And I select the Log Out option on Users Menu
        Then I should see the Log In button

