import { automationmethods } from "../Pagebobjects/AutomationMethods";

class Header {

    constructor(){
        this.ServicesBtn = "nav[class='header-nav']>ul>li>a[href*='services']";
        this.ServicesSubmenu ="nav[class='header-nav']>ul>li[class='t1-menu-li active']";
    }

    hoverButton(){
         //Hover over the Services Button
        automationmethods.hover(this.ServicesBtn)

        //Check Services Button hovered
        cy.get(this.ServicesSubmenu).should('have.class', 't1-menu-li active')
    }

    clickServicesButton() {
        //Click Services Button
        automationmethods.click(this.ServicesBtn)

        //Check that the new url is called
        automationmethods.verifyPageLoaded('services')
    }
}
export const header = new Header()