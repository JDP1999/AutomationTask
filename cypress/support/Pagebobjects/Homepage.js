import "cypress-real-events/support";
import { automationmethods } from "./AutomationMethods";
import { globallinksbutton } from "../Pageelements/GlobalLinksButton";

class Homepage {
    //Selectors
    constructor() {
        this.GlobalLinksBtn = "span:has(> i[aria-label='Select Country Website'])";
        this.SubMenuLink = "li[aria-label='Quality Engineering Submenu']"
    }

    //Methods
    loadHomepage() {
        //Call the Sogeti Side
        cy.visit('/')

        //Check if the Sogeti Side is called
        cy.url().should('include', 'https://www.sogeti.com/')

        //Wait for the submenu to exist
        cy.get(this.SubMenuLink).should('exist')
    }
    clickGlobalLinks() {
        var counter = 0;
        cy.fixture('countries.json').then((countries) => {
            for (counter in countries.countries) {
                //Calls the Method to click the Global Links Button
                globallinksbutton.clickGlobalLinksButton()

                //Click Country Specific Link
                automationmethods.click(countries.countries[counter].button)

                //Check if the new url is called
                cy.url().should('include', countries.countries[counter].newUrl)

                //Navigate back
                cy.go("back")

                //Check the current url
                cy.url().should('include', 'https://www.sogeti.com/')
            }
        })
    }

}
export const homepage = new Homepage();