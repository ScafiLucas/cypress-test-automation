/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage';
const loginPage = new LoginPage

import AutomationPage from '../pageobjects/AutomationPage';
const automationPage = new AutomationPage

import Header from '../pageobjects/Header';
const header = new Header

import { credentials } from '../testingdata/credentials';

Given ("I am at the login page", () =>{
    loginPage.checkLoginPageLoaded();
})

When ("I enter my login username and password", () =>{
    loginPage.typeUsername(credentials.valid_username)
    loginPage.typePassword(credentials.valid_password)
})

When ('I input my username value', () => {
    loginPage.typeUsername(credentials.valid_username)
})

When ('I input my password value', () => {
    loginPage.typePassword(credentials.valid_password)
})

When ('I input an invalid username', () => {
    loginPage.typeUsername(credentials.invalid_username)
})

When ('I input an invalid password', () => {
    loginPage.typePassword(credentials.invalid_password)
})

When ("I click Log In", () =>{
    loginPage.clickLogInButton();
})

When('I select the Log Out option on Users Menu', ()=> {
    header.performLogOutAction()
})

Then ("the Test Automation page should be loaded", () =>{
    automationPage.checkAutomationPageLoaded();
})

Then ('I must see the error message for both input elements', () => {
    loginPage.checkUsernameCredentialsIsEmptyMessage()
    loginPage.checkPasswordCredentialsIsEmptyMessage()
})

Then ('I must see the error message for empty input on username', () => {
    loginPage.checkUsernameCredentialsIsEmptyMessage()
})

Then ('I must see the error message for empty input on password', () => {
    loginPage.checkPasswordCredentialsIsEmptyMessage()
})

Then ('I must see the error message for inccorect input', () => {
    loginPage.checkInvalidCredentialsMessage()
})

Then ('I should see the Log In button', () => {
    loginPage.checkLogInButtonIsVisible()
})