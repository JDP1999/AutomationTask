import "cypress-real-events/support";
import AutomationMethods from "./AutomationMethods";
var is_active=false
const automation = new AutomationMethods()

class Homepage {
    loadHomepage() {
        //Call the Sogeti Side
        cy.visit('/')

        //Check if the Sogeti Side is called
        cy.url().should('include', 'https://www.sogeti.com/')

        //Spy an API Request that is called when the page is loaded
        cy.intercept("https://www.sogeti.com/wp-content/themes/sogeti2024/public/dist/archive-filter-expands.build.js").as("load")

        //Wait for the request being send
        cy.wait("@load",{ timeout:30000})
    }
    acceptCookies() {
        cy.fixture("identifiers.json").then((identifiers) => {
            //Click the Accpet Cookies Button
            automation.click(identifiers.acceptCookies)
        })

    }
    hoverServicesButton() {
        cy.fixture("identifiers.json").then((identifiers) => {
            //Hover over the Services Button
            automation.hover(identifiers.ServicesBtn)

            //Check Services Button hovered
            cy.get(identifiers.ServicesSubmenu).should('have.class', 't1-menu-li active')
        })
    }
    clickServicesButton() {
        cy.fixture("identifiers.json").then((identifiers) => {
            //Click Services Button
            automation.click(identifiers.ServicesBtn)

            //Check that the new url is called
            cy.url().should('contain', 'services')
        })
    }
    clickGlobalLinksButton() {
        //Check if the Global Links Button exists
        cy.fixture("identifiers.json").then((identifiers) =>{
            //Click Global Links Button
            automation.click(identifiers.GlobalLinksBtn)
        })
    }
    clickGlobalLinks() {
        var counter=0;
        cy.fixture('countries.json').then((countries)=>{
            for(counter in countries.countries){
                //Calls the Method to click the Global Links Button
                this.clickGlobalLinksButton()

                //Click Country Specific Link
                automation.click(countries.countries[counter].button)

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
        cy.fixture('identifiers.json').then((identifiers)=>{
            //Click the Contact Us Button
            automation.click(identifiers.ContactUsButton)

            //Check if the new url is called
            cy.url().should('include', 'contact-us')
        })
    }

}
export default Homepage