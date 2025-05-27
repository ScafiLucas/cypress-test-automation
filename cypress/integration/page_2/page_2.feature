
Feature: Validate the behavior of all Page 2 features

    Background: Login
        Given I am at the login page
        When I enter my login username and password
        And I click Log In
        And I click the Page 2 link
        Then I should see the Page 2 loaded 

    Scenario: Validate Horizontal Layout Button
        When I click the Horizontal Button
        Then I should check that the Horizontal Form is loaded

    Scenario: Validate Vertical Layout Button
        When I click the Vertical Button
        Then I should check that the Vertical Form is loaded

    Scenario: Validate In Line Layout Button
        When I click the In Line Button
        Then I should check that the In Line Form is loaded 

    @ExpectedToFail
    @Bug-001
    Scenario: Check the alphanumeric input condition on element Input
        When I type an non-alphabetic character in the Input element
        Then I should not see any input on the Input element

    Scenario: Select a country on Select Element
        When I select a country on the Select element
        Then I should the selected country on the Select element