/// <reference types="Cypress" />

import { pageOneElements } from '../elements/PageOneElements';

import Base from "./Base";
const base = new Base


class PageOnePage {

    /**
     * Checks if Page 1 is loaded.
     */
    checkPageOneIsLoaded(){
        base.findElementByMapping(pageOneElements.page_1_identifier)
    }

}

export default PageOnePage