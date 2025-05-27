/* global Given, Then, When */

import PageTwoPage from '../pageobjects/PageTwoPage';
const pageTwo = new PageTwoPage

When ('I click the Horizontal Button', () =>{
    pageTwo.clickHorizontalButton()
})

When ('I click the Vertical Button', () =>{
    pageTwo.clickVerticalButton()
})

When ('I click the In Line Button', () =>{ 
    pageTwo.clickInLineButton() 
})

When ('I type an non-alphabetic character in the Input element', () =>{
    pageTwo.typeNonAlphabeticCharacter();
})

When ('I select a country on the Select element', () =>{
    pageTwo.selectCountry();
})

Then ('I should check that the Horizontal Form is loaded', () => {
    pageTwo.checkHorizontalFormVisible()
})

Then ('I should check that the Vertical Form is loaded', () => {   
    pageTwo.checkVerticalFormVisible()
})

Then ('I should check that the In Line Form is loaded', () => {
    pageTwo.checkInLineFormVisible() 
})

Then ('I should not see any input on the Input element', () =>{
    pageTwo.checkNonAlphanumericInputOnInput()
})

Then ('I should the selected country on the Select element', () =>{
    pageTwo.checkSelectedCountry()
})