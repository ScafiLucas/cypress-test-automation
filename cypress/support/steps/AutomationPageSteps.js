/* global Given, Then, When */

import { automationPageElements } from '../elements/AutomationPageElements';
import AutomationPage from '../pageobjects/AutomationPage';
const automationPage = new AutomationPage

Then ('I must see all texts presented in the screen', () =>{
    automationPage.checkTestAutomationPageTexts()
})