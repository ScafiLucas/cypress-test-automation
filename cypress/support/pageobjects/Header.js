/// <reference types="Cypress" />

import {  headerElements } from '../elements/HeaderElements';

import Base from "./Base";
const base = new Base

class HeaderPage {

    /**
    * Clicks on the User Options Button located on the header of the page.
    */
    clickOnUserOptionButton() {
        base.clickElementByMapping(headerElements.header_user_option_button)
    }

    /**
     * Click on the Log Out dropdown option under the User Options Menu.
     */
    clickOnLogoutButton() {
        base.clickElementByTextValue(headerElements.header_user_option_dropdown_itens, headerElements.header_user_option_logout_text)
    }
       
    /**
     * Clickes on the User Options Button than select the Log Out dropdown option to logout the user.
     */ 
    performLogOutAction() {
        this.clickOnUserOptionButton()
        this.clickOnLogoutButton()
   }

   /**
    * Clicks on the Test Automation link
    */
   clickOnTestAutomationLink(){
        base.clickElementByMapping(headerElements.header_test_automation_link)
    }

   /**
    * Clicks on the Page 1 link.
    */
   clickOnPageOneLink() {
        base.clickElementByMapping(headerElements.header_page_1_link)
    }

    /**
    * Clicks on the Page 2 link.
    */
    clickOnPageTwoLink() {
        base.clickElementByMapping(headerElements.header_page_2_link)
    }

    /**
    * Clicks on the Page 3 link.
    */
     clickOnPageThreeLink() {
        base.clickElementByMapping(headerElements.header_page_3_link)
    }
        
}

export default HeaderPage