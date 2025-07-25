import "cypress-real-events/support";
import { automationmethods } from "./AutomationMethods";

class Homepage {
    //Selectors
    constructor() {
        this.acceptCookiesBtn = "button[id='accept']";
        this.ServicesBtn = "nav[class='header-nav']>ul>li>a[href*='services']";
        this.ServicesSubmenu = "nav[class='header-nav']>ul>li[class='t1-menu-li active']";
        this.GlobalLinksBtn = "span:has(> i[aria-label='Select Country Website'])";
        this.ContactUsButton = "nav[class='header-nav']>ul>li>a[href*='contact-us']>span>span";
    }

    //Methods
    loadHomepage() {
        //Call the Sogeti Side
        cy.visit('/')

        //Check if the Sogeti Side is called
        cy.url().should('include', 'https://www.sogeti.com/')

        //Spy an API Request that is called when the page is loaded
        cy.intercept("https://www.sogeti.com/wp-content/themes/sogeti2024/public/dist/custom-class-tmap.build.js").as("load")

        //Wait for the request being send
        // cy.wait("@load",{ timeout:30000})
        cy.wait(10000)
    }
    acceptCookies() {
        //Click the Accpet Cookies Button
        automationmethods.click(this.acceptCookiesBtn);

    }
    hoverServicesButton() {
        //Hover over the Services Button
        automationmethods.hover(this.ServicesBtn)

        //Check Services Button hovered
        cy.get(this.ServicesSubmenu).should('have.class', 't1-menu-li active')
    }
    clickServicesButton() {
        cy.fixture("identifiers.json").then((identifiers) => {
            //Click Services Button
            automationmethods.click(this.ServicesBtn)

            //Check that the new url is called
            cy.url().should('contain', 'services')
        })
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
                this.clickGlobalLinksButton()

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
    clickContactUsButton() {
        //Click the Contact Us Button
        automationmethods.click(this.ContactUsButton)

        //Check if the new url is called
        cy.url().should('include', 'contact-us')
    }

}
export const homepage = new Homepage();