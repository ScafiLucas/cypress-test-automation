/// <reference types="Cypress" />

import { pageThreeElements } from '../elements/PageThreeElements';

import Base from "./Base";
const base = new Base


class PageThreePage {

    /**
     * Checks if Page 3 is loaded.
     */
    checkPageThreeIsLoaded(){
        base.findElementByMapping(pageThreeElements.page_3_identifier)
    }

}

export default PageThreePage