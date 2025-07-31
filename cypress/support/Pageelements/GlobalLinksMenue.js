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
                    automationmethods.verifyPageLoaded(countries.countries[counter].newUrl)
    
                    //Navigate back
                    automationmethods.goBack()
    
                    //Check the current url
                    automationmethods.verifyPageLoaded('https://www.sogeti.com/')
                }
            })
        }
}
export const globallinksmenue = new GlobalLinksMenue();