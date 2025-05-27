/* global Given, Then, When */

import { automationPageElements } from '../elements/AutomationPageElements';
import AutomationPage from '../pageobjects/AutomationPage';
const automationPage = new AutomationPage

import Header from '../pageobjects/Header';
const header = new Header

import PageOnePage from '../pageobjects/PageOnePage';
const pageOne = new PageOnePage

import PageTwoPage from '../pageobjects/PageTwoPage';
const pageTwo = new PageTwoPage

import PageThreePage from '../pageobjects/PageThreePage';
const pageThree = new PageThreePage

Given ('I am on the Automation Screen', () => {
    automationPage.checkAutomationPageLoaded()
})

When ('I click the Test Automation Link', () => {
    header.clickOnTestAutomationLink()
})

When ('I click the Page 1 link', () => {
    header.clickOnPageOneLink()
})

When ('I click the Page 2 link', () => {
    header.clickOnPageTwoLink()
})

When ('I click the Page 3 link', () => {
    header.clickOnPageThreeLink()
})

Then ('I should see the Page 1 loaded', () => {
    pageOne.checkPageOneIsLoaded()
})

Then ('I should see the Page 2 loaded', () => {
    pageTwo.checkPageTwoIsLoaded()
})

Then ('I should see the Page 3 loaded', () => {
    pageThree.checkPageThreeIsLoaded()
})

Then ('I should see the Test Automation Page loaded', () =>{
    automationPage.checkAutomationPageLoaded()
})
