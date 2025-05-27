/// <reference types="Cypress" />

import { automationPageElements} from '../elements/AutomationPageElements'
import { automationPageTexts} from '../elements/AutomationPageElements'

import Base from "./Base";
const base = new Base

class AutomationPage {
    constructor() { this.title = 'LoginPage'; }
    
    /**
     * Check that the user is located at the Test Automation Page.
     */
    checkAutomationPageLoaded(){
        base.findElementByMapping(automationPageElements.automation_page_identifier)
    }

    /**
     * Checks all texts that must be loaded in the Test Automation Page through 
     * the iteration on the element list automationPageTexts, which contains all
     * the texts that must be loaded in the Test Automation Page.
     */
    checkTestAutomationPageTexts(){
        Object.values(automationPageTexts).forEach((texts) => {
            base.findElementByTextValue(texts)
        })
    }
}

export default AutomationPage