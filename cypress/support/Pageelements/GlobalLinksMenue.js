import { automationmethods } from "../Pagebobjects/AutomationMethods";

class GlobalLinksMenue{
    constructor(){
        this.GlobalLinksBtn = "span:has(> i[aria-label='Select Country Website'])";
    }

    clickGlobalLinksButton() {
        //Click Global Links Button
        automationmethods.click(this.GlobalLinksBtn)
    }

    clickGlobalLinks() {
            var counter = 0;
            cy.fixture('countries.json').then((countries) => {
                for (counter in countries.countries) {
                    //Calls the Method to click the Global Links Button
                    globallinksmenue.clickGlobalLinksButton()
    
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
export const globallinksmenue = new GlobalLinksMenue();