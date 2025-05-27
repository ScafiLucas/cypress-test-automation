/// <reference types="Cypress" />

class Base {

// ####### Methods for finding an element for it's attributes and characteristics #######

    /**
     * Finds an element for its given attributes.
     */
    findElementByMapping(element){
       cy.get(element, {timeout: 10000})
        .should('be.visible');
    }

    /**
     * Finds an element for its given text.
     */
    findElementByTextValue(value){
        cy.contains(value, {timeout: 10000})
    }

    /**
     * Finds an element that should have a specific value
     */
    findElementByValue(element, value){
        cy.get(element, {timeout: 10000})
            .should('have.value', value);
    }

    /**
     * Finds an element that should have a specific text value
     */
    checkElementByText(element, text){ 
        cy.get(element, {timeout: 10000})
            .should('have.text', text);
    }

// ####### Methods for clicking an element for it's attributes and characteristics #######

    /**
     * Finds an element for the given attributes and clicks on it.
     */
    clickElementByMapping(element){
        cy.get(element, {timeout: 10000})
                .click( {force: true})
    }

    /**
     * Finds an element for the given attributes and text value and clicks on it.
     */
    clickElementByTextValue(element, value){
        cy.get(element)
            .contains(value)
                .should('be.visible')
                    .click( {force: true})
    }

    /**
     * Clicks on an element by its Text
     */
    clickElementByText(element, text){
        cy.get(element).should('have.text', text).click( {force: true})
    }

    /**
     * Clicks on an

// ####### Methods for typing an element for it's attributes and characteristics #######

    /**
     * Finds an element for the given attributes and type the given value into it.
     **/
    typeValueInElement(element, value){
        cy.get(element, {timeout: 10000})
            .should('be.visible')
                .type(value, {force: true})
    }

 // ####### Methods for Selecing and element on a Selector #######
 
    /** 
     * Selects and given value on the given element
     */
     selectAValueIntoASelector(element, value){
        cy.get(element)
            .select(value)
     }
    

}

export default Base