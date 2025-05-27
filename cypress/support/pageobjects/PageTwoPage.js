/// <reference types="Cypress" />

import { pageTwoElements } from '../elements/PageTwoElements';
import { pageTwoTestingData } from '../elements/PageTwoElements';

import Base from "./Base";
const base = new Base


class PageTwoPage {

    /**
     * Checks if Page 2 is loaded.
     */
    checkPageTwoIsLoaded(){
        base.findElementByMapping(pageTwoElements.page_2_identifier)
    }

    /**
     * Clicks on the Horizontal Button to change the Form Layout
     */
     clickHorizontalButton(){
        base.clickElementByMapping(pageTwoElements.horizontal_button)
     }

    /**
     * Clicks on the Vertical Button to change the Form Layout
     */
    clickVerticalButton(){
        base.clickElementByMapping(pageTwoElements.vertical_button)
    }

    /**
     * Clicks on the In Line Button to change the Form Layout
     */
    clickInLineButton(){
        base.clickElementByMapping(pageTwoElements.in_line_button)
    }

    /**
     * Checks if the Horizontal form is presented in the screen
     */
     checkHorizontalFormVisible(){
        base.findElementByMapping(pageTwoElements.horizontal_form)
     }

     /**
     * Checks if the Vertical form is presented in the screen
     */
    checkVerticalFormVisible(){
        base.findElementByMapping(pageTwoElements.vertical_form)
    }
    /**
     * Checks if the In Line form is presented in the screen
     */
     checkInLineFormVisible(){
        base.findElementByMapping(pageTwoElements.in_line_form)
    }

    /***
     * Type a1* as a non alphanumeric string to validated that the * character will not be typed
     */
     typeNonAlphabeticCharacter(){
        base.typeValueInElement(pageTwoElements.input_element, pageTwoTestingData.input_value)
     }

     /**
      * Check if the input on typeNonAlphabeticCharacter will not be able to type * on the Input Element
      */
      checkNonAlphanumericInputOnInput(){
        base.findElementByValue(pageTwoElements.input_element, pageTwoTestingData.expected_input_value)
      }

    /**
    * Select a country on the Select element
    */
    selectCountry(){
       base.clickElementByMapping(pageTwoElements.select_element)
       base.clickElementByTextValue(pageTwoElements.dropdown_selector, pageTwoTestingData.selector_value)
     }

     /**
      * Check if the country on the Select element is correctly selected
      */
      checkSelectedCountry(){
        base.checkElementByText(pageTwoElements.selector_after_selection, pageTwoTestingData.selector_value)
      }
}

export default PageTwoPage