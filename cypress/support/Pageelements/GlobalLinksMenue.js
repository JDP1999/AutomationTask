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
                    if (counter <= 11) {
                        //Calls the Method to click the Global Links Button
                        globallinksmenue.clickGlobalLinksButton()

                        //Click Country Specific Link
                        automationmethods.firstclick("ul[id='menu-location-menu']>li>a[href*='"+countries.countries[counter].domain+"']")

                        //Check if the new url is called
                        automationmethods.verifyPageLoaded('https://www.sogeti.' + countries.countries[counter].domain + '/')

                        //Navigate back
                        automationmethods.goBack()

                        //Check the current url
                        automationmethods.verifyPageLoaded('https://www.sogeti.' + countries.countries[0].domain + '/')
                    }
                    else {
                        //Calls the Method to click the Global Links Button
                        globallinksmenue.clickGlobalLinksButton()

                        //Click Country Specific Link
                        automationmethods.firstclick("ul[id='menu-location-menu']>li>a[href*='"+countries.countries[counter].domain+"']")

                        //Check if the new url is called
                        automationmethods.verifyPageLoaded('https://www.' + countries.countries[counter].domain + '.sogeti.com/')

                        //Navigate back
                        automationmethods.goBack()

                        //Check the current url
                        automationmethods.verifyPageLoaded('https://www.sogeti.' + countries.countries[0].domain + '/')
                    }
                }
            })
        }
}
export const globallinksmenue = new GlobalLinksMenue();