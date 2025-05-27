/// <reference types="Cypress" />

import {  loginPageElements } from '../elements/LoginPageElements';

import Base from "./Base";
const base = new Base


class LoginPage {

    /**
     * Check if the Login Page is loaded.
     */
    checkLoginPageLoaded(){
        base.findElementByMapping(loginPageElements.login_page_identifier)
    }

    /**
     * Input the username on the username input element.
     */
    typeUsername(username){
        base.typeValueInElement(loginPageElements.input_username, username)
    }

    /**
     * Input the password on the password input element.
     */
    typePassword(password){
        base.typeValueInElement(loginPageElements.input_password, password)
    }
    
     /**
      * Click on the Log In button to perform the validation of the user credentials
      * than logs into the system.
      */
    clickLogInButton(){
        base.clickElementByMapping(loginPageElements.logIn_button)
    }

    /**
     * Check if the error message on empty username is shown.
     */
     checkUsernameCredentialsIsEmptyMessage(){
        base.findElementByTextValue(loginPageElements.username_error_message)
     }

     /**
      * Check if the error message on empty password is shown.
      */
     checkPasswordCredentialsIsEmptyMessage(){
        base.findElementByTextValue(loginPageElements.password_error_message)
     }

     /**
      * Check if the error message if an invalid username or password is given
      */
     checkInvalidCredentialsMessage(){
        base.findElementByTextValue(loginPageElements.logIn_error_message)
     }
    
     /**
      * Checks if the Login Button is visiible on the Login Screen
      */
     checkLogInButtonIsVisible(){
        base.findElementByMapping(loginPageElements.logIn_button)
     }
}

export default LoginPage