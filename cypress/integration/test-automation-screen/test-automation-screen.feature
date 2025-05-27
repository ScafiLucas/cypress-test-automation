
Feature: Validate the Test Automation Screen features and Content

    Background: Login
        Given I am at the login page
        When I enter my login username and password
        Then I click Log In

    Scenario: : Validate elements present in Test Automation Screen
        Given I am on the Automation Screen
        Then I must see all texts presented in the screen    